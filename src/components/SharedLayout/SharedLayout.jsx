import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from '../Loader/Loader';
import { NavHeader } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <NavHeader>
        <Navigation />
      </NavHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
