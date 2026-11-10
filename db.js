import mysql from 'mysql2/promise';
import dotenv from 'dotenv/config';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  connectiontimelimit:1000000

});

export default pool;
