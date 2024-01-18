const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse incoming JSON requests

// Define your API routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle undefined routes (404)
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
