import { useState, useEffect } from 'react';
import MoviesListed from '../components/MoviesListed';
import { getTrendingMovies } from '../api/tmdb';


function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            const data = await getTrendingMovies();
            setMovies(data);
            setLoading(false);
            console.log(data);
        }
        fetchMovies();
    }, []);
    if (loading) return <div>Loading...</div>;  
    return (
        <div>
            <h1 className='favorites-page'>Trending Movies</h1>
            <MoviesListed movies={movies} />;
        </div>
        
    );
};

export default HomePage;