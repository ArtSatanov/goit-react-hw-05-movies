import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
