const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("dummydatabase", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
