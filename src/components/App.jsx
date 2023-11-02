import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home />} />
      </Routes>
    </div>
  );
};
