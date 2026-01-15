const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// Define Task model
const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  taskText: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'task_text' // Maps to snake_case in MySQL
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'tasks',
  timestamps: true, // Adds createdAt and updatedAt
  underscored: true // Use snake_case in database
});
module.exports = Task;