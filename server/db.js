const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "teste123",
  host: "localhost",
  post: "5432",
  database: "jwtpern",
});

module.exports = pool;
