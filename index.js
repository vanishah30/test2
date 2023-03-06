// Port to run on
const port = 4000;

// Import express for creating a web server
const express = require('express');

// Import path to handle file paths
const path = require('path');

// Create a web server
const app = express();

// Serve all the files in the dist folder
app.use(express.static('dist'));

// Always serve index.html if nothing else found
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the web server on a port
app.listen(port, () => console.log('Listening on port ' + port));