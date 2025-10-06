import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmdb";

const MoviesListed = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getTrendingMovies();
                setMovies(data || []);
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <strong>{movie.title}</strong> ({movie.release_date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesListed;