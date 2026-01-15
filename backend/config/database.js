const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,     // database name
  process.env.DB_USER,     // username
  process.env.DB_PASSWORD, // password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false, // Set to console.log to see SQL queries

    // this was added for production (down codes) 
    // SSL configuration for production (Aiven requires this)
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false // Aiven uses self-signed certificates
      } : false
    },
     // this was added for production (up codes)
    pool: {
      max: 5,      // Maximum connections
      min: 0,      // Minimum connections
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully');
  } catch (error) {
    console.error('❌ Unable to connect to database:', error);
  }
};

testConnection();
module.exports = sequelize;