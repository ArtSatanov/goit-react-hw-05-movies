import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from '../../API';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const refLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();

    async function getInfoById() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchDetails(Number(movieId), controller.signal);
        setMovieInfo(response);
        setLoading(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    getInfoById();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  const { poster_path, title, name, overview, genres, vote_average } =
    movieInfo;

  console.log(refLocation);

  return (
    <div>
      <Link to={refLocation.current}>GO BACK </Link>
      {loading && <Loader />}
      {error && <p>Movie has not founded, choose please another movies</p>}
      {!loading && (
        <div>
          <div>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title ?? name}
              />
            )}
          </div>
          <div>
            <h2>{title ?? name}</h2>
            <p>User Score: {vote_average?.toFixed(2)}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Geners</h3>
            <p>{genres?.map(genre => genre.name).join(' ')}</p>
          </div>
          <div>
            <Link to={'cast'}>Cast</Link>
            <Link to={'reviews'}>Reviews</Link>
          </div>
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
