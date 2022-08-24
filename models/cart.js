const Sequalize = require("sequelize-v5");

const sequalize = require("../util/database");

const Cart = sequalize.define("cart", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
