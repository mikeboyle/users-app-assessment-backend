const express = require('express');
const cors = require('cors');
const usersController = require('./controllers/usersController');
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ data: "Service is running "});
});

app.use('/users', usersController);

//TODO: REMOVE THIS TEST ROUTE 
app.get("/tests", async (request, response) => {
  try {
    const tests = await db.any("SELECT * FROM tests");
    
    response.status(200).json({ data: tests });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.all('*', (req, res) => {
  res.status(404).json({ error: "Not found"});
})

module.exports = app;