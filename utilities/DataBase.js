import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mybdd",
  password: "password",
  port: 5432,
});

pool.connect();

export async function findAll() {
  return await pool
    .query(`SELECT * FROM player;`)
    .then((res) => {
      // console.log(res.rows[0]);
      return res.rows
    })
    .catch((error) => console.error(error.stack));
}

export async function findById(id) {
  return await pool
    .query(`SELECT * FROM player WHERE id = ${id};`)
    .then((res) => console.log(res.rows[0]))
    .catch((error) => console.error(error.stack));
}

export async function UpdatePlayer(id, level) {
  return await pool
    .query(`UPDATE player SET level = ${level} WHERE id = ${id};`)
    .then((res) => console.log(res.command))
    .catch((error) => console.error(error.stack));
}
