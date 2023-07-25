import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {

  return (
    <ul>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default MovieList
