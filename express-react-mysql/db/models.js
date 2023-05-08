const Sequelize = require("sequelize");

// Define database connection details
const sequelize = new Sequelize("mydatabase", "myusername", "mypassword", {
  host: "localhost",
  dialect: "mysql",
});

// Define User model
const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = { User };
