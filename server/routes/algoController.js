const { Pool } = require('pg');
const URI = require('../models/database');

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI
});

const algoController = {};








module.exports = algoController;