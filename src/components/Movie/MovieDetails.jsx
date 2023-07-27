import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { searchMovieToIdApi } from '../../Utils/Api';
import styled from './MovieDetails.module.css';

const MovieDetails = () => {
  const START_URL = 'https://image.tmdb.org/t/p/w500/';
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();


  useEffect(() => {
    searchMovieToIdApi(movieId).then(data => setDetails(data));
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = details;
  return (
    <>
      <Link to={location.state || `/movie?query=${localStorage.getItem(`query`)}`}>
        <button className={styled.btn}>Go back</button>
      </Link>
      <img src={`${START_URL}${poster_path}`} alt={title}></img>
      <h1>{title}</h1>
      <p>User score : {Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Ganres</h2>
      <ul>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>

      <h3>Additional information</h3>
      <div className={styled.movieList}>
        <Link to="cast">
          <button className={styled.btn} state={location.state}>
            Cast
          </button>
        </Link>
        <Link to="reviews">
          <button className={styled.btn} state={location.state}>
            Reviews
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
