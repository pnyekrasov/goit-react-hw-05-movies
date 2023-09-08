import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { MainNav } from 'components/MainNav/MainNav';
import { Loader } from 'components/Loader/Loader';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <MainNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
