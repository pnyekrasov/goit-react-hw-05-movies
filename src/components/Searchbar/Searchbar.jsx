// import { ImSearch } from 'react-icons/im';

// import {
//   StyledHeader,
//   StyledForm,
//   SearchFormButton,
//   SearchFormInput,
// } from './Searchbar.styled';

export const Searchbar = ({ onChange }) => {
  return (
    <div>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          onChange(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <input type="text" name="query" placeholder="Search movie" />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};
