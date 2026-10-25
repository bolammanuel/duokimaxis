import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

// Preserve links to the previous hash-routed site without creating two public URL schemes.
const legacyHash = window.location.hash.startsWith('#/');
if (legacyHash) {
  const target = window.location.hash.slice(1);
  window.history.replaceState(window.history.state, '', target);
}
const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
if (root.children.length > 0 && !legacyHash) hydrateRoot(root, app);
else createRoot(root).render(app);
