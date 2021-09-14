//importing and destructuring pg library
const { Pool } = require('pg');

//create pool that connects to postgres
const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};

