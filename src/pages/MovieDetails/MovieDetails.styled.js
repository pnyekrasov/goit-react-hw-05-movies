import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  padding: 4px 8px;
  font-size: 12px;
  color: #000;

  text-decoration: none;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background: #fef3f3;

  &:hover {
    background: #ebe3e3;
  }

  &:active {
    position: relative;
    top: 4px;
    background: #cbafaf;
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
