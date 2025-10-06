import React from 'react';
import MoviesListed from '../components/MoviesListed';


const HomePage = () => {
    // const [movies, setMovies] = useState([]);
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Welcome to Movie App</h1>
            <p>Discover and explore your favorite movies!</p>
            <h2>Trending Movies</h2>
            <MoviesListed />    
            {/* <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title} ({movie.release_date} {movie.poster_path})</li>
                ))}
            </ul> */}

        </div>
    );
};

export default HomePage;