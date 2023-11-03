import { Link } from 'react-router-dom';

export const MoviesList = ({ response }) => {
  return (
    <div>
      <ul>
        {response.map(resp => (
          <li key={resp.id}>
            <Link to={`movies/: ${resp.id}`}>
              {resp.name} ?? {resp.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
