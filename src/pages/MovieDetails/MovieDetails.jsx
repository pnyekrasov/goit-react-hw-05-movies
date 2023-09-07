import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Suspense, useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { fetchMovieDetails } from 'api';
import { Innerp, List, StyledLink, Text, Wrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    async function getDetailsFilm() {
      try {
        const detailsFilm = await fetchMovieDetails(movieId);
        setMovieData(detailsFilm);
      } catch (error) {
        console.error(error);
      }
    }
    getDetailsFilm();
  }, [movieId]);

  const backLink = location?.state?.from ?? '/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <StyledLink to={backLink}>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <BiArrowBack />
        </IconContext.Provider>
        &nbsp;Go back
      </StyledLink>
      {movieData && (
        <div>
          <Wrap>
            <img
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <Innerp>
              <h2>{movieData.title}</h2>
              <p>
                User Score:&nbsp;
                <span>{Math.round(movieData.vote_average * 10)}%</span>
              </p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h4>Genres</h4>
              <List>
                {movieData.genres.map(({ id, name }) => (
                  <li key={id}>
                    <p>{name}</p>
                  </li>
                ))}
              </List>
            </Innerp>
          </Wrap>
          <div>
            <hr />
            <Text>Additional information</Text>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
            <hr />
          </div>
          <Suspense fallback={<div>LOADING</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
