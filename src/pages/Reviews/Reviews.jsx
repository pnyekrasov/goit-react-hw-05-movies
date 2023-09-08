import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api';
import { Caption, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function getReviewsFilm() {
      try {
        const ReviewsFilm = await fetchReviews(movieId);
        setMovieReviews(ReviewsFilm);
      } catch (error) {
        console.error(error);
      }
    }
    getReviewsFilm();
  }, [movieId]);

  return movieReviews.length > 0 ? (
    <ul>
      {movieReviews.map(({ id, author, content }) => (
        <li key={id}>
          <Caption>Author:&nbsp;{author}</Caption>
          <Text>{content}</Text>
        </li>
      ))}
    </ul>
  ) : (
    <p>"We don't have any reviews for this movie."</p>
  );
};

export default Reviews;
