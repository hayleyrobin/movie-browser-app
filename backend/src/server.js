// entry point for backend server - connects to database and starts server
const express = require('express');
const postgres = require('pg');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express(); // Initialize express app

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies  

// Connect to PostgreSQL
const pool = new postgres.Pool({ // Use connection string from environment variable
    connectionString: process.env.DATABASE_URL,
});

pool.connect()
    .then(() => console.log('PostgreSQL connected'))
    .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Movie Browser API');
});

// example route to get movies from database
app.get('/movies', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM movies');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error fetching movies');
    }
});

const PORT = 5001;
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});