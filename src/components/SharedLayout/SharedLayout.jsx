import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainNav } from 'components/MainNav/MainNav';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <MainNav />
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
