import { useState, useEffect } from "react";
import { searchMovieTopApi } from '../Utils/Api';
import MovieList from "components/Movie/MovieList";


const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        searchMovieTopApi().then(data => setMovies(data));
    },[])

    return <MovieList movies={movies} />
}

export default Home;