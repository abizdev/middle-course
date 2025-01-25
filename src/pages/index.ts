import { lazy } from 'react';
import MainPage from './main/page';

const AboutAsync = lazy(() => import('./about/page'));
const NotFoundAsync = lazy(() => import('./not-found/page'));

export {
  MainPage,
  AboutAsync as AboutPage,
  NotFoundAsync as NotFoundPage
};