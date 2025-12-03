const postgres = require('pg');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const { Pool } = postgres; // pool is used to manage multiple connections

// Create a PostgreSQL connection pool
const postgresPool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use environment variable for database URL
});

module.exports = postgresPool;