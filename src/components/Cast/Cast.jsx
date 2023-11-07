import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCredits } from '../../API';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getCreditsById() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchCredits(Number(movieId), controller.signal);
        setCredits(response.cast);
        setLoading(false);
      } catch (error) {
        if (error !== 'ERR_CANCELLED') {
          setError(true);
        }
      }
    }
    getCreditsById();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Info has not founded, choose please another movies</p>}
      {!loading && (
        <ul>
          {credits.map(credit => (
            <li key={credit.id}>
              {credit.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${credit.profile_path}`}
                  alt={credit.name}
                />
              )}

              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
