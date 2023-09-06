import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api';
import { Suspense, useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    async function getDetailsFilm() {
      try {
        // setLoading(true);
        const detailsFilm = await fetchMovieDetails(movieId);
        setMovieData(detailsFilm);
      } catch (error) {
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getDetailsFilm();
  }, [movieId]);

  const backLink = location?.state?.from ?? '/';
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
            User Score:&nbsp;
            <span>{Math.round(movieData.vote_average * 10)}%</span>
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
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>LOADING</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
