const db = require("../helpers/database");
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const generateUUID = () => {
  return uuidv4();
};

const Client = db.define("clients", {
  id: {
    type: DataTypes.UUID,
    defaultValue: generateUUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: false,
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
