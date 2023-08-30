import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// export const fetchPopularMovies = async () => {
//   const response = await axios('/trending/get-trending', options);
//   console.log(response.data.results);
//   return response.data.results;
// };

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 2cc1cdd3dc7a1b39cf1b283648efca77',
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios.request(options).then(function (response) {
    console.log(response.data);
  });
  return response.data;

  // .then(function (response) {
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });
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
