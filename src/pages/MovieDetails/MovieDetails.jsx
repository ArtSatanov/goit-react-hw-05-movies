import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../API';

export const MovieDetails = () => {
  const { id } = useParams();
  fetchDetails(id);
  console.log(id);
  return (
    <div>
      <h2></h2>
      <p></p>
      <h3></h3>
    </div>
  );
};
