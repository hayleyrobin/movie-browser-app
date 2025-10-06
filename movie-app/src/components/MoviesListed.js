import MovieDetails from "./MovieDetails";

function MoviesListed ({movies}) {
    return (
        <div>
            {movies.map((movie) => (
                <MovieDetails key={movie.id} movie={movie} />
                ))}

        </div>
    );
};

export default MoviesListed;