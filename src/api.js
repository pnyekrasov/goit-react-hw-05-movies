import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 2cc1cdd3dc7a1b39cf1b283648efca77',
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios('/trending/get-trending', options);
  console.log(response.data.results);
  return response.data.results;
};

// fetch('https://api.themoviedb.org/3//trending/get-trending', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// https://trending/all/{time_window}

// https://search/movie

// https://movie/{movie_id}

// https://movie/{movie_id}/credits

// https://movie/{movie_id}/reviews
