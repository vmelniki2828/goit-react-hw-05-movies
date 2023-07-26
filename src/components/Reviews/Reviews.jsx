import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieReviewsApi } from '../../Utils/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    searchMovieReviewsApi(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <li>We don`t have reviews for this movie</li>
      ) : (
        reviews.map(review => {
          const { author, content, id } = review;
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Reviews;