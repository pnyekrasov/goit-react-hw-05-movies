import { fetchReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function getReviewsFilm() {
      try {
        // setLoading(true);
        const ReviewsFilm = await fetchReviews(movieId);
        setMovieReviews(ReviewsFilm);
      } catch (error) {
        console.error(error);
      }

      // finally {
      //   setLoading(false);
      // }
    }
    getReviewsFilm();
  }, [movieId]);

  // const defaultText = "We don't have any reviews foe this movie.";

  return movieReviews.length > 0 ? (
    <ul>
      {movieReviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author:&nbsp;{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>"We don't have any reviews for this movie."</p>
  );

  // <>
  //   (movieReviews.length>0) ?
  //   <ul>
  //     {movieReviews.map(({ id, author, content }) => (
  //       <li key={id}>
  //         <h4>Author:&nbsp;{author}</h4>
  //         <p>{content}</p>
  //       </li>
  //     ))}
  //   </ul>
  //   :<p>"We don't have any reviews foe this movie."</p>
  // </>;
};

export default Reviews;
