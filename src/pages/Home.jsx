import { useEffect, useState } from 'react';

import { fetchPopularMovies } from 'api';
// import { Link } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
// import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [filmItems, setFilmItems] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        // setLoading(true);
        const filmItems = await fetchPopularMovies();
        setFilmItems(filmItems);
      } catch (error) {
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getFilms();
  }, []);

  return <MoviesList movies={filmItems} />;
};

export default Home;
