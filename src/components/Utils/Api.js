import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a860cfd897e99827a5ea5e5210690a78';

export const searchMovieTopApi = () => {
  return axios
    .get('trending/movie/day', { params: { api_key: API_KEY } })
    .then(res => res.data.results);
};

export const searchMovieApi = query => {
  return axios
    .get('search/movie', { params: { api_key: API_KEY, query } })
    .then(res => res.data.results);
};

export const searchMovieToIdApi = movie_id => {
  return axios
    .get(`movie/${movie_id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const searchMovieCastApi = movie_id => {
  return axios
    .get(`movie/${movie_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const searchMovieReviewsApi = movie_id => {
  return axios
    .get(`movie/${movie_id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};
