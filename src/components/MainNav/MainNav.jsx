import { List, StyledLink } from './MainNav.styled';

export const MainNav = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </List>
    </nav>
  );
};
