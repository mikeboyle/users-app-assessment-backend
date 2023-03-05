// Dependencies
const express = require('express');
const cors = require('cors');

// Controllers
const usersController = require('./controllers/usersController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/users', usersController);

// Routes
// Healthcheck route
app.get('/', (req, res) => {
  res.status(200).json({ data: "Service is running "});
});

app.all('*', (req, res) => {
  res.status(404).json({ error: "Not found"});
})

module.exports = app;