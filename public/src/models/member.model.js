const db = require("../helpers/database");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const Member = db.define("members", {
  id: {
    type: DataTypes.UUID,
    defaultValue: db.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_no: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = Client;
