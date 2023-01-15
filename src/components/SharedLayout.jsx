import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LoaderSpinner } from './Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
      <Suspense fallback={<LoaderSpinner />}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};
