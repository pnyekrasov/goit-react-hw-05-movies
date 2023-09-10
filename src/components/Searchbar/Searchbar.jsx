import { toast } from 'react-hot-toast';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [_, setSearchParams] = useSearchParams();
  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (!query.trim()) {
      toast.error('Enter the data in the field "Search movie", please');
      return;
    }
    setSearchParams({ query });
    evt.target.reset();
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput type="text" name="query" placeholder="Search movie" />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};
