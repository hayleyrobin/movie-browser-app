const pool = require("../db/db"); // Import the database connection pool

// Fetch all favorite movies from the database
exports.getFavorites = async () => {
  const result = await pool.query("SELECT * FROM favorites ORDER BY id DESC");
  return result.rows;
};

// Add a new favorite movie to the database
exports.addFavorite = async (movie) => {
  const { movie_id, title, poster_path } = movie;

  const result = await pool.query(
    "INSERT INTO favorites (movie_id, title, poster_path) VALUES ($1, $2, $3) RETURNING *",
    [movie_id, title, poster_path]
  );

  return result.rows[0];
};
