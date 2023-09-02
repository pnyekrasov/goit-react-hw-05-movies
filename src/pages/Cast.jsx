import { fetchCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function getCastFilm() {
      try {
        // setLoading(true);
        const castFilm = await fetchCast(movieId);
        setMovieCast(castFilm);
      } catch (error) {
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getCastFilm();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {movieCast && (
        <ul>
          {movieCast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={100}
                alt="actor_photo"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
