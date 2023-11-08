import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../API';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Error } from 'components/Error/Error';

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
      {error && <Error msg={'Please, reload the page'} />}
      {movies.length === 0 && <Error msg={'Please, change serach query.'} />}
      {!loading && !error && (
        <MoviesList moviesList={movies} location={location} />
      )}
    </div>
  );
};

export default Movies;
