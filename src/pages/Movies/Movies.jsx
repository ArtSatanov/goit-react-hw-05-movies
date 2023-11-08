import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../API';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const queryParams = searchParams.get('query');

    if (!queryParams) {
      return;
    }

    const controller = new AbortController();

    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchByQuery(queryParams, controller.signal);
        setMovies(response.results);
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
  }, [searchParams]);

  return (
    <div>
      <SearchBar getQuery={setSearchParams} />
      {loading && <Loader />}
      {error && <p>Please, reload the page</p>}
      {!loading && <MoviesList moviesList={movies} location={location} />}
    </div>
  );
};

export default Movies;
