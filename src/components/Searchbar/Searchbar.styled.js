import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin-top: 4px;
`;

export const SearchFormButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  background: #fef3f3;
  border: 2px outset #ebe3e3;

  &:hover {
    background: #ebe3e3;
  }

  &:active {
    background: #cbafaf;
    border: 2px inset #ebe3e3;
  }
`;

export const SearchFormInput = styled.input`
  width: 400px;
  border: 1px solid #f0e9e9;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font-size: 14px;
    color: #d2c4c4;
  }
`;
