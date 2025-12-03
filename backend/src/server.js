// entry point for backend server - connects to database and starts server

const express = require('express'); // API server framework
const cors = require('cors'); // allow frontend to access backend APIs
const dotenv = require('dotenv'); 
const movieRoutes = require('./routes/movieRoutes.js');

dotenv.config(); // Load environment variables

const app = express(); // Initialize express app
const pool = require('./db/db.js'); // Import the database connection pool

// Middleware - will be executed for every request
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // parse data sent in request body as JSON

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Movie Browser API');
});

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "DB test failed" });
  }
});

app.use('/api/movies', movieRoutes);

// Define the port and start the server
const PORT = process.env.PORT || 5001; // Use environment variable or default to 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});