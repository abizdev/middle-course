import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { i18nForTests } from 'shared/config';

const renderWithTranslation = (component: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18nForTests}>
      {component}
    </I18nextProvider>
  )
};

export default renderWithTranslation;
