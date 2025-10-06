import React from 'react';

const MovieDetails = ({ movie }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            
        </div>
    );
};

export default MovieDetails;