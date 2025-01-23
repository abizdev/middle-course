import { createRoot, Root } from 'react-dom/client';
import App from './app';
import './styles/index.scss'
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'app/providers/theme-provider';
import 'shared/config/i18n/i18n'

// @ts-ignore
const root: Root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
