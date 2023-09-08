import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
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

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) {
      toast.error('Enter the data in the field "Search movie", please');
      setSearchParams({});
      return;
    }
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <Searchbar onChange={handleSubmit} />
      <MoviesList movies={filmItems} />
    </div>
  );
};

export default Movies;
