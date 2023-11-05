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
    async function getCreditsById() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchCredits(Number(movieId));
        setCredits(response.cast);
        setLoading(false);
      } catch (error) {
        if (error !== 'ERR_CANCELLED') {
          setError(true);
        }
      }
    }
    getCreditsById();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul>
        {credits.map(credit => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w300${credit.profile_path}`}
              alt={credit.name}
            />
            <p>{credit.name}</p>
            <p>{credit.character}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};
