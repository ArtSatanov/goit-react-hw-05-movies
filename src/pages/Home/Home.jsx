import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrending } from '../../API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { Error } from 'components/Error/Error';

const Home = () => {
  const location = useLocation();
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
        if (error.code !== 'ERR_CANCELED') {
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
      {error && <Error msg={'Please, reload the page'} />}
      {!loading && !error && (
        <MoviesList moviesList={trandingMovies} location={location} />
      )}
    </div>
  );
};

export default Home;
