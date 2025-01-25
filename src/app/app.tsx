import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/route-provider';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib'
import IconMoon from 'shared/assets/icons/icon-moon.svg'
import IconSun from 'shared/assets/icons/icon-sun.svg'
import SomeImg from 'shared/assets/some-img.jpg'
import './styles/index.scss'

const Component = () => {
  const {t, i18n} = useTranslation()

  const toggleLang = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <div>
      {t('testText')}
      <button onClick={toggleLang}>{t('changeLang')}</button>
    </div>
  )
}

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <React.Suspense fallback={''}>
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>toggleTheme</button>
        <IconMoon />
        <IconSun />
        <img src={SomeImg} alt="some img" width={300} height={300} />

        <Component />
        <AppRouter />
      </div>

    </React.Suspense>
  );
};

export default App;
