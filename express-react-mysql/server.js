const express = require("express");
const mysql = require("mysql");

require("dotenv").config();
const app = express();

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "examplepassword",
  database: "myapp",
});

app.use(express.static("client/build"));

app.get("/", (req, res) => {
  res.send("Root Route!");
});

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
