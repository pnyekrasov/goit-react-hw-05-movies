import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer 2cc1cdd3dc7a1b39cf1b283648efca77',

    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2MxY2RkM2RjN2ExYjM5Y2YxYjI4MzY0OGVmY2E3NyIsInN1YiI6IjY0ZWNiYjM5MWZlYWMxMDBmZTVlM2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1gN5-kJ3dQV8KS9fTdZgyIcLiLn0R2J34HxmI1QCx4M',
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios.request('trending/movie/day', options);
  console.log(response.data.results);
  return response.data.results;
};

// https://trending/all/{time_window}

// https://search/movie

// https://movie/{movie_id}

// https://movie/{movie_id}/credits

// https://movie/{movie_id}/reviews
