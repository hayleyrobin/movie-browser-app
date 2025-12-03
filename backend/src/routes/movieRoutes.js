const express = require("express");
const { getAllFavorites, createFavorite } = require("../controllers/movieController");

// Create a router for movie-related routes
const router = express.Router();

// Define routes for getting all favorites and adding a new favorite
router.get("/", getAllFavorites);
router.post("/", createFavorite);

module.exports = router;
