import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieItem = ({ movie }) => {
    const {id, title} = movie;
    const location = useLocation();
    return(
        <li key={id}>
            <Link state={location} to={`/movie/${id}`}>
                {title}
            </Link>
        </li>
    )
}

export default MovieItem;

MovieItem.propTypes = {
    movie: PropTypes.array.isRequired,
  }