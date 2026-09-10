import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/main.scss';
import { useLenisScroll } from './components/hooks/useLenisScroll.js';

function Root() {
  useLenisScroll();
  return <App />;
}

export default Root;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
