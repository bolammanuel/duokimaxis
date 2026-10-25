import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import App from './App';
export { getMetadata, PUBLIC_PATHS } from './utils/metadata';
export { SITE_URL, CONTACT_EMAIL } from './config';

export function render(pathname: string): string {
  return renderToString(
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>,
  );
}
