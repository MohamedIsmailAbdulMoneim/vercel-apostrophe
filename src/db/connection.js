// db.js

import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apostrophe',
  password: '12345',
  port: 5432, // your PostgreSQL port
});

export default pool;
