import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainNav } from 'components/MainNav';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <MainNav />
      <hr />
      <Outlet />
      <Toaster />
    </Container>
  );
};
