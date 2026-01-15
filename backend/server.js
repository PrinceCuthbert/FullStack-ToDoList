
// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();


// Initialize Express app
const app = express();

const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');


// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON request bodies


// Test route - our first API endpoint!
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is working!',
  });
});


app.use('/api/tasks', taskRoutes);


// Start server
const PORT = process.env.PORT || 5000;


// Wait for database first
sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Database synced');
  
  // THEN start server
  app.listen(PORT, () => {
    console.log('🚀 Server running on http://localhost:5000');
  });
});