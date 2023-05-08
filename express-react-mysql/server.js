const express = require("express");
const Sequelize = require("sequelize");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;
const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
const { User } = require("./db/models");

sequelize
  .sync()
  .then(() => {
    console.log("Table created successfully.");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

app.use(express.static("client/build"));

app.get("/", (req, res) => {
  res.send("Root Route!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users." });
  }
});

app.get("/createrandomuser", async (req, res) => {
  try {
    const random = Math.random() * 15000;
    const newUser = await User.create({
      firstName: "Jane" + random,
      lastName: "Doe" + random,
      email: `jonedoe.${random}@example.com`,
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
