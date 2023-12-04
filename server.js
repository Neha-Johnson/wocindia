// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wocindia_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a catch-all route to serve your index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
