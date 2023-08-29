import axios from 'axios';

// axios.defaults.baseURL = https://api.themoviedb.org/3/

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2MxY2RkM2RjN2ExYjM5Y2YxYjI4MzY0OGVmY2E3NyIsInN1YiI6IjY0ZWNiYjM5MWZlYWMxMDBmZTVlM2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1gN5-kJ3dQV8KS9fTdZgyIcLiLn0R2J34HxmI1QCx4M',
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios(
    'https://api.themoviedb.org/3//trending/get-trending',
    options
  );
  return response.data;
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
