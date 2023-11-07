import { Link } from 'react-router-dom';

export const MoviesItem = ({ id, title, poster, location }) => {
  return (
    <div>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
};
