import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [filmItems, setFilmItems] = useState([]);

  useEffect(() => {
    if (!query) return;
    async function getFilms() {
      try {
        const filmItems = await fetchSearchMovie(query);
        setFilmItems(filmItems);
      } catch (error) {
        console.error(error);
      }
    }
    getFilms();
  }, [query]);

  return (
    <div>
      <Searchbar />
      <MoviesList movies={filmItems} />
    </div>
  );
};

export default Movies;
