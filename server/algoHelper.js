const { Pool } = require('pg');
const { getTotalRows, getAlgo } = require('./controllers/algoController');
const URI = require('./models/database');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI,
});


async function algoHelper(payload){

  const gotRows = await getTotalRows(payload);

  const gotAlgo = await getAlgo(gotRows);
  return gotAlgo;


  //console.log('resObj: ', resObj)
  // resObj = Object.assign(resObj, algoController.getAlgo(resObj));
  // console.log('getAlsgo: ', algoController.get)

}

module.exports = algoHelper;