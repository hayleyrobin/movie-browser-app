import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons
import { useState, useEffect } from 'react';

const MovieInfo = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => { // Check if the movie is already a favorite
    const checkIfFavorite = () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
        const isFav = storedFavorites.some((fav) => fav.id === movie.id);
        setIsFavorite(isFav);
    };
    checkIfFavorite(); 
  }, [movie.id]);

  const toggleFavorite = (e) => { // Add or remove movie from favorites
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isFav = storedFavorites.some((fav) => fav.id === movie.id);

    let updatedFavorites; 
    if (isFav) { 
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== movie.id); // Remove from favorites 
    } else { // Add to favorites
      const movieData = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
      };
      updatedFavorites = [...storedFavorites, movieData]; // Add to favorites
    }

    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites)); // Update localStorage
    setIsFavorite(!isFav);
  };
    return (
        <div className="movie-info-card">
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none'}}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>  
            </Link>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite();
                }}
                style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                marginTop: "5px",
                color: isFavorite ? "red" : "white",
                }}>
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    );
};

export default MovieInfo;