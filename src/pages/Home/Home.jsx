import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrending } from '../../API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [trandingMovies, setTreandingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetchTrending(controller.signal);
        setTreandingMovies(response);
        setLoading(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELLED') {
          setError(true);
        }
      }
    }
    getMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Please, reload the page</p>}
      {!loading && <MoviesList moviesList={trandingMovies} />}
    </div>
  );
};
