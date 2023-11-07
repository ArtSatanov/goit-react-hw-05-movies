import { MoviesItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ moviesList, location }) => {
  return (
    <div>
      <ul>
        {moviesList.map(resp => (
          <li key={resp.id}>
            <MoviesItem
              id={resp.id}
              title={resp.title ?? resp.name}
              poster={resp.backdrop_path}
              location={location}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
