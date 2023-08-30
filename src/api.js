import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/get-trending',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 2cc1cdd3dc7a1b39cf1b283648efca77',
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
};

// https://trending/all/{time_window}

// https://search/movie

// https://movie/{movie_id}

// https://movie/{movie_id}/credits

// https://movie/{movie_id}/reviews
