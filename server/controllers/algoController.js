const { Pool } = require('pg');
const URI = require('../models/database');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI,
});

const algoController = {};

algoController.getTotalRows = (payload) => {
  // if it's a new game
  if (!payload.totalRows) {
    // grabbing total # of rows in the DB table
    const query = 'SELECT COUNT(*) FROM algorithms';
    pool
      .query(query)
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
  } else {
    return {
      totalRows: payload.totalRows,
      completedAlgos: payload.completedAlgos,
      roomNumber: payload.roomNumber, 
    }
  }
};

algoController.getAlgo = (resObj) => {
  // generate a random algo ID, confirm if we have not called it
  const { completedAlgos, totalRows } = resObj;

  let newAlgoID = Math.floor(Math.random() * totalRows);

  while (completedAlgos[newAlgoID]) {
    newAlgoID = Math.floor(Math.random() * totalRows);
  }

  // add the new algo ID to our completedAlgos cache to keep track of all the sent algos
  completedAlgos[newAlgoID] = true;
  
  // retrieve a new algo from DB
  const query = `SELECT * FROM algorithms WHERE algo_id = ${newAlgoID}`;
  pool
    .query(query)
    .then((data) => {
      const returnObj = data.rows[0];



      return {
        algoID: returnObj.algo_id,
        algoName: returnObj.algo_name,
        algoPrompt: returnObj.algo_prompt,
        test_cases: returnObj.test_cases,
        algoStart: `function(${returnObj.function_name}(${returnObj.parameters}){
          // write your code here. Good luck :P
        })`
      };
    })
    .catch((e) => {
      console.log(`Error in algoController.getAlgos - unable to retrieve an algo from database: ${e}`)
      });
};

// algoController.generateAlgoStart = (req, res, next) => {

//   res.locals.algoStart = `function(${res.locals.returnObj.function_name}(${res.locals.returnObj.parameters}){
//       // write your code here. Good luck :P
//     })`;
//   return next();
// };

algoController.testFunction = (req, res, next) => {
  // validating and santizing the inputs
  if (
    !req.body.test_cases ||
    !req.body.username ||
    !req.body.time ||
    !req.body.userFxn
  ) {
    return next({
      log: `Error in algoController.testFunction - missing necessary req.body properties`,
      status: 206,
      message: { err: 'Missing required POST request properties' },
    });
  }

  const { test_cases, username, userFxn, time } = req.body;
  let pass = true;
  // test the user input fxn with the test cases
  // test_cases: [[input, output]]

  // iterate through the test_cases array, and pass in the input -> expect the output
  const userFunc = eval(userFxn);

  test_cases.forEach((test) => {
    if (userFunc(test[0]) !== test[1]) return (pass = false);
  });

  // if user is correct, send back the username
  if (pass) {
    res.locals.winner = username;
  }

  res.locals.endGame = pass;
  return next();
};

module.exports = algoController;
