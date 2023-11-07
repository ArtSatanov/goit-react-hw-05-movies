import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../../API';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
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

  console.log(reviews);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Info has not founded, choose please another movies</p>}
      {!loading && (
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
