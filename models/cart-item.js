const Sequalize = require("sequelize-v5");

const sequalize = require("../util/database");

const CartItem = sequalize.define("cartitem", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequalize.INTEGER,
});

module.exports = CartItem;
