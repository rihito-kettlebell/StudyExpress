const express = require("express");
const pg = require("pg");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Start server port: ${port}`);
});

const pool = new pg.pool({
  host: "hoge",
  database: "hogehoge",
  user: "hogehogehoge",
  port: 5432,
  password: "hogehogehogehoge"
});

app.post("/register", (req, res) => {
  const id = req.body.post_id;
  ( async () => {
    const client = pool.connect();
    try{
      await client.query("BEGIN");
      let result = await client.query("SELECT name FROM users WHERE id = $1", [id]);
      const user_name = result.rows[0];
      client.query("INSERT INTO teams (member) VALUES ($1)", [user_name]);
      await client.query("COMMIT");
      res.json({
        msg: "Successfully insert data!"
      });
    } catch {
      await client.query("ROLLBACK");
      throw err
    }  finally {
      client.release();
    }
  })().catch( err => {
    console.log(err.stack);
    res.json({
      msg: "Fail to insert data"
    });
  });
});