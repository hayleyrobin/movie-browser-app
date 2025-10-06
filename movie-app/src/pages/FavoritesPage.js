import React from "react";
import MoviesListed from "../components/MoviesListed";

function FavoritesPage() {
  const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  if (favoriteMovies.length === 0) {
    return <p>No favorite movies added yet.</p>;
  }

  return (
    <div className="favorites-page">
        <h2>Your Favorite Movies</h2>
        <MoviesListed movies={favoriteMovies} />
    </div>
  );
}

export default FavoritesPage;