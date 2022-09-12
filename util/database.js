const Sequalize = require("sequelize-v5");

const sequalize = new Sequalize(
  "nodeecommerce",
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequalize;
