import { Outlet, useParams } from 'react-router-dom';
import { fetchDetails } from '../../API';
import { Suspense, useEffect,useState } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    async function getInfoById() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchDetails(Number(movieId));
        setMovieInfo(response);
        setLoading(false);
      } catch (error) {
        if (error !== 'ERR_CANCELLED') {
          setError(true);
        }
      }
    }
    getInfoById();
    console.log(movieInfo);
  }, [])

  const {poster_path,title, name, overview,genres, vote_average} = movieInfo;
  
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
      </div>
      <div>
        <h2>{title ?? name}</h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Geners</h3>
        {genres.map(gener=>gener.name).join(" ")}
      </div>
      <Suspense>
        <Outlet/>
      </Suspense>

    </div>
  );
};
