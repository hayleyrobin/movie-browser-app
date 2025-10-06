import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";

function MovieDetailPage() {
  const { id } = useParams(); // get movie_id
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Unable to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie cannot be not found.</p>;

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </div>
  );
}

export default MovieDetailPage;
