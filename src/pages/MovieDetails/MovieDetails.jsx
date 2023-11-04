import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../API';
import { useEffect,useState } from 'react';

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

  cosnt 
  
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="" />
      </div>
      <div>

      </div>
      <h2></h2>
      <p></p>
      <h3></h3>
    </div>
  );
};
