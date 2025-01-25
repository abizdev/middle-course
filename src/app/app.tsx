import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/navbar';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/route-provider';
import { useTheme } from './providers/theme-provider';
import './styles/index.scss'

// const Component = () => {
//   const {t, i18n} = useTranslation()
//
//   const toggleLang = (): void => {
//     i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
//   }
//
//   return (
//     <div>
//       {t('testText')}
//       <button onClick={toggleLang}>{t('changeLang')}</button>
//     </div>
//   )
// }

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <React.Suspense fallback={''}>
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
