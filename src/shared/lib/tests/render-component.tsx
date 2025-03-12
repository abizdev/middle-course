import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { i18nForTests } from 'shared/config';
import { MemoryRouter } from 'react-router';
import { StoreProvider } from 'app/providers/store-provider';

export interface componentRenderProps {
  route?: string
}

const renderComponent = (component: React.ReactNode, options: componentRenderProps = {}) => {
  const { route = '/' } = options;

  return render(
    <StoreProvider>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
};

export default renderComponent;
