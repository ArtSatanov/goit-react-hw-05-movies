import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={'LOADING...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
