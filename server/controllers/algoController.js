const { Pool } = require('pg');
const URI = require('../models/database');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI
});

const algoController = {};

algoController.getTotalRows = (req, res, next) => {

 // if it's a new game
  if (!req.body.totalRows) {
    // grabbing total # of rows in the DB table
    const query = 'SELECT COUNT(*) FROM algorithms';

    pool.query(query)
    .then(data => {
      res.locals.totalRows = Number(data.rows[0].count);

      return next();
    })
    .catch(e => { next({
        log: `Error in algoController.getTotalRows - unable to retrieve total rows in database: ${e}`
      })
    })
  } else {

    const { totalRows } = req.body
    res.locals.totalRows = totalRows
    return next();
  }
}

algoController.getAlgo = (req, res, next) => {

  // checking if total rows is desired value
  if (!res.locals.totalRows || typeof res.locals.totalRows !== 'number'){
    return next({
      log: 'Error in algoController.getAlgo - res.locals.totalRows does not have the correct value'
    })
  }
  
  // generate a random algo ID, confirm if we have not called it
  const { completedAlgos } = req.body;

  let randomNum = Math.floor(Math.random() * res.locals.totalRows); 
  
  while (completedAlgos[randomNum]) {
    randomNum = Math.floor(Math.random() * res.locals.totalRows)
  }

  
  // retrieve a new algo from DB
  const query = `SELECT * FROM algorithms WHERE algo_id = ${randomNum}`
  pool.query(query)
  .then(data => {
    res.locals.returnObj = data.rows[0];
    
    return next();
  })
  .catch(e => {next({
    log: `Error in algoController.getAlgos - unable to retrieve an algo from database: ${e}`
  })})

}

algoController.generateAlgoStart = (req, res, next) => {

  // res.locals.algoStart = `function(${res.locals.function_name}(${res.locals.parameters}){
  //       // write your code here. Good luck :P
  // })`

  return next();
}

algoController.testFunction = (req, res, next) => {
/*
request body:
  {
    completedAlgos: [number]
    algoID: #,
    test_cases: json,
    username: string,
    userFxn: string
    time: string
  }
*/

/*
if user pases:
response body:
{
  endGame: true
  winner: username 
}

if user fails:
{ 
 endGame: false
}


*/

}






module.exports = algoController;