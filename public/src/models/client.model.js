const db = require("../helpers/database");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Client = db.define("clients", {
  id: {
    type: DataTypes.UUID,
    defaultValue: db.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = Client;
