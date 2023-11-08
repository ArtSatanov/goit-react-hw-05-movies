import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../../API';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getReviewsById() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchReviews(Number(movieId), controller.signal);
        setReviews(response.results);
        setLoading(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    getReviewsById();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <Error msg={'Info has not founded, choose please another movies.'} />
      )}
      {reviews.length === 0 && <Error msg={"There's no reviews yet."} />}
      {!loading && !error && (
        <ul>
          {reviews.map(({ content, author, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
