const { Pool } = require('pg');
const URI = require('../models/database');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI,
});


async function getTotalRows(payload){
  // if it's a new game
  
  if (!payload.totalRows) {
    // grabbing total # of rows in the DB table
    const query = 'SELECT COUNT(*) FROM algorithms';
    
    // result -> obj or the error message
    const result = await pool.query(query)
      .then((data) => {
        return { 
            totalRows: Number(data.rows[0].count),
            completedAlgos: payload.completedAlgos,
            roomNumber: payload.roomNumber, 
          };
        
        })
        .catch((e) => {
          console.log(`Error in algoController.getTotalRows - unable to retrieve total rows in database: ${e}`);
          });
        
     return result;
  } else {
    return {
      totalRows: payload.totalRows,
      completedAlgos: payload.completedAlgos,
      roomNumber: payload.roomNumber, 
    }
  }
};

async function getAlgo(payload) {
  // generate a random algo ID, confirm if we have not called it
  const { completedAlgos, totalRows } = payload;

  let newAlgoID = Math.ceil(Math.random() * totalRows);

  while (completedAlgos[newAlgoID]) {
    newAlgoID = Math.ceil(Math.random() * totalRows);
  }

  // add the new algo ID to our completedAlgos cache to keep track of all the sent algos
  completedAlgos[newAlgoID] = true;

  // retrieve a new algo from DB
  const query = `SELECT * FROM algorithms WHERE algo_id = ${newAlgoID}`;

  // result -> 2 values: object or error
  const newAlgoObj = await pool.query(query)
    .then((data) => {
      const dataObj = data.rows[0];
      return {
        algoID: dataObj.algo_id,
        algoName: dataObj.algo_name,
        algoPrompt: dataObj.algo_prompt,
        test_cases: dataObj.test_cases,
        algoStart: `function ${dataObj.function_name}(${dataObj.parameters}){
          // write your code here. Good luck :P
        }`
      };
    })
    .catch((e) => {
      console.log(`Error in getAlgos - unable to retrieve an algo from database: ${e}`)
      });

  const finalResObj = Object.assign(payload, newAlgoObj);    
  return finalResObj;
};

function testUserFxn(req, socketID) {
  // validating and santizing the inputs

  // eventually put back req.username
  if (!req.test_cases || !req.userFxn) return console.log(`Error in algoController.testUserFxn - missing necessary required properties`);


  const { test_cases, username, userFxn } = req;
  let pass = true;
  // test the user input fxn with the test cases

  // iterate through the test_cases array, and pass in the input -> expect the output
  const userFunc = eval(userFxn);

  test_cases.forEach((test) => {
    if (userFunc(test[0]) !== test[1]) return (pass = false);
  });

  // if user is correct, send back the username
  const endGameObj = {} 
  if (pass) {
    endGameObj.winner = socketID;
  }

  endGameObj.endRound = pass;
  return endGameObj;
};

module.exports = {
  getTotalRows,
  getAlgo,
  testUserFxn,
};
