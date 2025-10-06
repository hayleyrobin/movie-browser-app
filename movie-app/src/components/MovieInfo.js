import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons
import { useState, useEffect } from 'react';

const MovieInfo = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((id) => id !== movie.id);
    } else {
      updatedFavorites = [...storedFavorites, movie.id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

    return (
        <div className="movie-info-card">
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none'}}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>  
            </Link>
            <button
                onClick={toggleFavorite}
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