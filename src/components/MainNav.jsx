import { NavLink } from 'react-router-dom';

export const MainNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        {/* <li>
            <NavLink to="/movies/:movieId">MovieDetails</NavLink>
          </li>
          <li>
            <NavLink to="/movies/:movieId/cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="movies/:movieId/reviews">Reviews</NavLink>
          </li> */}
      </ul>
    </nav>
  );
};
