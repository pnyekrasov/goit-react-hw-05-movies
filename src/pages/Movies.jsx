import { fetchSearchMovie } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [filmItems, setFilmItems] = useState([]);

  useEffect(() => {
    if (!query) return;
    async function getFilms() {
      try {
        // setLoading(true);
        const index = query.indexOf('/') + 1;
        const currentQuery = query.slice(index);

        const filmItems = await fetchSearchMovie(currentQuery);
        setFilmItems(filmItems);
      } catch (error) {
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getFilms();
  }, [query]);

  const hendleSubmit = newQuery => {
    if (!newQuery.trim()) {
      return toast.error('Enter the data in the field "Search movie", please');
    }
    setQuery(`${Date.now()}/${newQuery}`);
  };

  return (
    <div>
      <Searchbar onChange={hendleSubmit} />
      <MoviesList movies={filmItems} />
    </div>
  );
};

export default Movies;
