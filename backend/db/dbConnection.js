require("dotenv").config({ path: "./config.env" });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,  // Database name
  process.env.USER,           // Username
  process.env.PASSWORD,       // Password
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // For self-signed certificates
      },
    },
  }
);

module.exports = sequelize;
