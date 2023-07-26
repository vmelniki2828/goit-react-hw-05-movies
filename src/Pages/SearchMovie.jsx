import MovieList from 'components/Movie/MovieList';
import { searchMovieApi } from 'Utils/Api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);
  const query = searchParams.get('query');



  const SearchingMovie = e => {
    e.preventDefault();  
    if(movieName !== ''){ 
      setSearchParams({ query: movieName });
    }
    
  };

  const changeInput = e => {
    localStorage.setItem('query', e.target.value)
    setMovieName(localStorage.getItem('query'));
  };

  useEffect(() => {
    console.log(query)
    query && searchMovieApi(query).then(data => setMovieList(data));
  }, [query]);
  return (
    <>
      <form onSubmit={SearchingMovie}>
        <input type="text" value={localStorage.getItem('query')} onChange={changeInput} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movieList} />
    </>
  );
};

export default SearchMovie;
