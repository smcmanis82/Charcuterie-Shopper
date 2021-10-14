const { Client } = require('pg');
const DB_NAME = 'localhost:5432/charcuterie';
const DB_URL =
  `${process.env.DATABASE_URL}?sslmode=require` || `postgres://${DB_NAME}`;
const client = new Client({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  client,
};
