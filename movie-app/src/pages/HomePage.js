import React from 'react';
import trendingMovies from "../data/trendingMovies.json";
// import movieDetails from "../data/movieDetails.json";


const HomePage = () => {
    // Get the movies array from the JSON structure
    const movies = trendingMovies[0]?.results || [];
    console.log(movies);
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Welcome to Movie App</h1>
            <p>Discover and explore your favorite movies!</p>
            <h2>Trending Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} ({movie.release_date} {movie.poster_path})</li>
                ))}
            </ul>

        </div>
    );
};

export default HomePage;