// queries.js

import pool from './connection';

const getData = async (username) => {
  const client = await pool.connect();

  try {
    const result = await client.query(`SELECT id, (select course_name from courses where courses.id = subscriptions.course_id ) as CourseName, (select course_link from courses where courses.id = subscriptions.course_id ) as CourseLink FROM subscriptions WHERE user_id = (SELECT id FROM users WHERE username = '${username}')`);
    return result.rows;
  } finally {
    client.release();
  }
};

export { getData };
