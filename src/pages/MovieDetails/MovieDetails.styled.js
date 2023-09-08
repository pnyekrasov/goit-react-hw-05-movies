import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  padding: 0 6px;
  font-size: 14px;
  color: #000;
  text-decoration: none;
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

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const Innerp = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Text = styled.p`
  margin-top: 16px;
`;
