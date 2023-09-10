import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value;
    if (!newQuery.trim()) {
      toast.error('Enter the data in the field "Search movie", please');
      return;
    }
    onChange(newQuery);
    evt.target.reset();
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          // value="query"
          name="query"
          placeholder="Search movie"
        />

        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};
