import { createRoot, Root } from 'react-dom/client';
import App from './app';
import './styles/index.scss'
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'app/providers/theme-provider';

// @ts-ignore
const root: Root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);