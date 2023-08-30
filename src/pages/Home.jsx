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
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getFilms();
  }, []);
  return console.log(filmItems);
  //     <div>Home</div>
  // <ul>
  //   {filmItems.map(film => (
  //     <li key={film.id}>
  //      <Link></Link>
  //     </li>
  //   ))}
  // </ul>
};

export default Home;
