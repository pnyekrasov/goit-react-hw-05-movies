import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2MxY2RkM2RjN2ExYjM5Y2YxYjI4MzY0OGVmY2E3NyIsInN1YiI6IjY0ZWNiYjM5MWZlYWMxMDBmZTVlM2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1gN5-kJ3dQV8KS9fTdZgyIcLiLn0R2J34HxmI1QCx4M',
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios.get('trending/movie/day', options);
  // console.log(response.data.results);
  return response.data.results;
};

export const fetchSearchMovie = async () => {
  const response = await axios.get('search/movie', options);
  console.log(response.data);
  return response.data;
};

export const fetchMovieDetails = async () => {
  const response = await axios.get('movie/movie_id', options);
  console.log(response.data);
  return response.data;
};

export const fetchCast = async () => {
  const response = await axios.get('movie/movie_id/credits', options);
  console.log(response.data);
  return response.data;
};

export const fetchReviews = async () => {
  const response = await axios.get('movie/movie_id/reviews', options);
  console.log(response.data);
  return response.data;
};
