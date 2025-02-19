import { lazy } from 'react';
import MainPage from './main/ui/page';

const AboutAsync = lazy(() => import('./about/ui/page'));
const NotFoundAsync = lazy(() => import('./not-found/ui/page'));

export {
  MainPage,
  AboutAsync as AboutPage,
  NotFoundAsync as NotFoundPage
};
