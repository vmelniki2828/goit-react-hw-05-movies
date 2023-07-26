import MovieItem from "./MovieItem";
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}