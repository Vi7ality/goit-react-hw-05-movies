import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'a9f79ec1d262c07be8cb295866d72ad6',
};

export const searchMovies = async query => {
  return await axios.get(
    `search/movie?query=${query}&language=en-US&page=1&include_adult=false`
  );
};

export const getMovieDetails = async movieId => {
  return await axios.get(`movie/${movieId}?language=en-US`);
};

export const getTrandingMovies = async () => {
  return await axios.get(`trending/movie/day?page=1`);
};
