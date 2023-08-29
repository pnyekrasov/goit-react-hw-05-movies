import { fetchPopularMovies } from 'api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [filmItems, setFilmItems] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        // setLoading(true);
        const filmItems = await fetchPopularMovies();
        setFilmItems(filmItems);
      } catch (error) {
        console.log(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getFilms();
  }, []);
  return <div>Home</div>;
};

export default Home;
