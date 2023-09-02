import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    async function getDetailsFilms() {
      try {
        // setLoading(true);
        const detailsFilms = await fetchMovieDetails(movieId);
        console.log(detailsFilms);
        setMovieData(detailsFilms);
      } catch (error) {
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getDetailsFilms();
  }, [movieId]);

  const backLink = location.state?.from ?? '/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <Link to={backLink}>
        <AiOutlineArrowLeft />
        Go back
      </Link>
      {movieData && (
        <div>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <h2>{movieData.title}</h2>
          <p>
            User Score: <span>{Math.round(movieData.vote_average * 10)}%</span>
          </p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movieData.genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="/movies/:movieId/cast">Cast</Link>
            </li>
            <li>
              <Link to="/movies/:movieId/reviews">Reviews</Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
