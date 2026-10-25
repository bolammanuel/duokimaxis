# Duokim Axis

A React and TypeScript website for the studio, built with Vite. The production build prerenders the main pages and case studies into static HTML. No application server is needed for hosting.

## Local development

Use Node.js 22.18 or later.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite, normally `http://localhost:3000`.

To review the production output, including prerendered pages and real 404 responses:

```sh
npm run build
npm test
npm run preview
```

The production preview is normally `http://127.0.0.1:4173`. Pass `-- --port 4174` to use another port. `npm run typecheck` checks types and unused code independently.

The included GitHub Actions workflow runs the build and tests on pushes and pull requests. It does not deploy the website.

## Contact inquiries

The default contact flow prepares an email draft. Visitors review and send it through their own email application. The website does not announce delivery or redirect to a success page for a draft.

The inbox currently defaults to `duokimaxis@gmail.com`, carried over from the original website. Confirm it is monitored before publishing, or set `VITE_CONTACT_EMAIL` to the appropriate inbox in a local `.env.local` file. `.env.example` lists supported settings.

Direct delivery is optional. When a service is chosen, the existing EmailJS integration can be enabled with all three public settings:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Configure the EmailJS template's recipient as your studio inbox, reply-to as `{{reply_to}}`, and use `{{from_name}}`, `{{service}}`, and `{{message}}` in its body. Configure the provider's allowed origins and delivery limits for your real domain. No private keys belong in a `VITE_` variable or in this repository.

With direct delivery enabled, success is shown only after the provider accepts the request. Errors preserve the visitor's details and offer the email draft alternative. Unit tests cover configuration, validation, encoding, successful acknowledgement, and rejection. Live provider delivery has not been tested because no service is connected.

## Analytics

Analytics is off by default. Setting a real `VITE_GA_MEASUREMENT_ID` makes the consent controls available. Google Analytics loads only after the visitor opts in. The footer lets them change their choice. Page views and acknowledged inquiry submissions are tracked without the form's name, address, or message.

The site sends route page views explicitly. If analytics is enabled, turn off automatic browser-history page views in the GA property's enhanced measurement settings to avoid duplicate counts.

## Pages, content, and styling

- `src/data/content.ts`: project stories, services, process, team, and FAQs.
- `src/styles/index.css`: design tokens, layouts, responsive styles, and reduced motion support.
- `src/config.ts`: public site, contact, and optional integration configuration.
- `src/utils/metadata.ts`: route titles, descriptions, and public sitemap paths.
- `public/social-card.svg` and `public/favicon.svg`: editable sources for the social image and icons. Their PNG exports are included.

Project stories use their own `/work/<project-id>` pages. Links from the old hash router redirect to the corresponding clean path. Forms are in-page, service details are visible, and FAQs use native disclosure controls.

## Build and hosting

`npm run build` checks TypeScript, builds browser assets, then uses React's server renderer at build time to write each page into `dist/<path>/index.html`. It also generates route metadata, a sitemap, robots instructions, and `404.html`. Inquiry confirmations and error pages are excluded from the sitemap and marked `noindex`.

Publish the contents of `dist` at the root of the domain. The host must serve directory index files (for example, `/about` → `/about/index.html`) and use `404.html` for missing pages. Netlify's fallback is provided in `public/_redirects`. The local preview implements these same directory and 404 behaviors. Set `VITE_SITE_URL` before building if the production domain changes. The `/` Vite base assumes root-domain hosting, not a GitHub project subdirectory.

The original repository tracks some generated `dist` files and `node_modules`. This redesign preserves those existing tracked files; its changes are in source and configuration. Build fresh output before deploying. A separate repository maintenance change can remove generated files from Git tracking without changing how this site builds.

Nothing in the local redesign workflow pushes to GitHub or deploys the site.
