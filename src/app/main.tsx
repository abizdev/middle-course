import { createRoot, Root } from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'app/providers/theme-provider';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { StoreProvider } from 'app/providers/store-provider';
import './styles/index.scss'
import 'shared/config/i18n/i18n'

// @ts-ignore
const root: Root = createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
