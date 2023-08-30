import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from 'api';

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
  return (
    <ul>
      {filmItems.map(({ id, title }) => (
        <li key={id}>
          <Link to="/movies/:movieId">{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
