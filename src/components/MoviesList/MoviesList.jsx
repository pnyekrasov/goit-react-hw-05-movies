import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to="/movies/:movieId">{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
