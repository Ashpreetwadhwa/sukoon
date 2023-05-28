const express = require('express');
const app = express();
const port = 3000; // Choose a suitable port number

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  // Return the HTML file for the home page
  res.sendFile(__dirname + '/index.html');
});

// Define routes for the different forms
app.get('/furniture', (req, res) => {
  // Handle the Furniture Making, Upholstery & Polish form submission
  // Add your backend logic here
  res.send('Furniture form submitted');
});

app.get('/carpenter', (req, res) => {
  // Handle the Carpenters form submission
  // Add your backend logic here
  res.send('Carpenter form submitted');
});

app.get('/electricians', (req, res) => {
  // Handle the Electricians form submission
  // Add your backend logic here
  res.send('Electricians form submitted');
});

app.get('/plumber', (req, res) => {
  // Handle the Plumbers form submission
  // Add your backend logic here
  res.send('Plumber form submitted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});