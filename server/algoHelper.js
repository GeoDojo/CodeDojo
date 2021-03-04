
const { getTotalRows, getAlgo } = require('./controllers/algoController');

async function algoHelper(payload){

  const gotRows = await getTotalRows(payload);
  const gotAlgo = await getAlgo(gotRows);
  return gotAlgo;

}

module.exports = algoHelper;