const Sequalize = require("sequelize-v5");

const sequalize = new Sequalize("nodeecommerce", "root", "flaco6mysql6shady", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequalize;
