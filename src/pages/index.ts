import { lazy } from 'react';
import MainPage from './main/ui/page';

const AboutAsync = lazy(() => import('./about/ui/page'));
const ProfileAsync = lazy(() => import('./profile/ui/page'));


const NotFoundAsync = lazy(() => import('./not-found/ui/page'));

export {
  MainPage,
  AboutAsync as AboutPage,
  ProfileAsync as ProfilePage,
  NotFoundAsync as NotFoundPage
};
