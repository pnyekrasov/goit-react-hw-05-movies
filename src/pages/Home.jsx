import { useEffect, useState } from 'react';

import { fetchPopularMovies } from 'api';
// import { Link } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [filmItems, setFilmItems] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const filmItems = await fetchPopularMovies();
        setFilmItems(filmItems);
      } catch (error) {
        console.error(error);
      }
    }
    getFilms();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={filmItems} />;
    </div>
  );
};

export default Home;
