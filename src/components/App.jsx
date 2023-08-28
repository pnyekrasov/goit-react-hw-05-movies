import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};
