import { NavLink, Route, Routes } from 'react-router-dom';
// import { AppLayout } from './AppLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <div>
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
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route
          path="/movies"
          element={
            <div>
              <Movies />
            </div>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <div>
              <MovieDetails />
            </div>
          }
        >
          <Route
            path="cast"
            element={
              <div>
                <Cast />
              </div>
            }
          />
          <Route
            path="reviews"
            element={
              <div>
                <Reviews />
              </div>
            }
          />
        </Route>

        {/* <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
      </Route> */}
      </Routes>
    </div>
  );
};
