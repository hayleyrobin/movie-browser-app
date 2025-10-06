import { Link } from 'react-router-dom';

const MovieInfo = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none'}}>
            <div className="movie-info-card">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
        </Link>
    );
};

export default MovieInfo;