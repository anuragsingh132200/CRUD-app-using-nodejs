const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Change to your PostgreSQL username
  host: "localhost",
  database: "customer_management_system", // Change to your database name
  password: "password", // Change to your PostgreSQL password
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
