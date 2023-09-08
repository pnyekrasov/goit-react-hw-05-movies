import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onChange }) => {
  return (
    <>
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault();
          onChange(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <SearchFormInput type="text" name="query" placeholder="Search movie" />

        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};
