const { getFavorites, addFavorite } = require("../models/movieModel");

// Controller to handle fetching all favorite movies
exports.getAllFavorites = async (req, res) => {
  try {
    const movies = await getFavorites();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to handle adding a new favorite movie
exports.createFavorite = async (req, res) => {
  try {
    const newMovie = await addFavorite(req.body);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
