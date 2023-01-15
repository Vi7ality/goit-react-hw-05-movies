import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoaderSpinner } from '../Loader';
import { Container, Header, HeaderLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </Header>
      <Suspense fallback={<LoaderSpinner />}>
        <Outlet></Outlet>
      </Suspense>
    </Container>
  );
};
