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
  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const options = {
    params: {
      include_adult: 'false',
      page: '1',
      query: `${query}`,
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2MxY2RkM2RjN2ExYjM5Y2YxYjI4MzY0OGVmY2E3NyIsInN1YiI6IjY0ZWNiYjM5MWZlYWMxMDBmZTVlM2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1gN5-kJ3dQV8KS9fTdZgyIcLiLn0R2J34HxmI1QCx4M',
    },
  };
  const response = await axios.get('search/movie', options);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data.results;
};
