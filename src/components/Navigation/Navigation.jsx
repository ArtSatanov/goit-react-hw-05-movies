import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </div>
  );
};
