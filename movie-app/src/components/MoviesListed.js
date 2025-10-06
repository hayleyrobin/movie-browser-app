import MovieInfo from "./MovieInfo";

function MoviesListed ({movies}) {
    return (
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieInfo key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesListed;