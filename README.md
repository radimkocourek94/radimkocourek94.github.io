# radimkocourek94.github.io

Portfolio of Radim Kocourek — technical writer, content designer,
documentation engineer. Built with [Docusaurus](https://docusaurus.io/),
[React](https://react.dev), and [MDX](https://mdxjs.com), deployed to
GitHub Pages by GitHub Actions.

## Structure

- `docs/case-studies/` — grounded portfolio case studies
  (review-loop infrastructure, AI-assisted docs workflows, UI copy rewrites)
- `docs/samples/` — invented-but-realistic mini documentation set for a
  fictional SaaS ("Taskline"): quickstart, how-to, API reference,
  troubleshooting
- `docs/meta/` — the self-referential case study of this site
- `src/pages/` — landing + About (career narrative + inline CV)
- `src/components/` — custom MDX components: `BeforeAfter`, `Diff`,
  `Metric`, `Callout`
- `.notes/` — private working notes, gitignored

## Commands

```bash
npm install     # install dependencies
npm run start   # local dev server
npm run build   # production build → build/
npm run serve   # serve the production build locally
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: build → upload →
deploy to GitHub Pages. The repository must have Pages set to
**Settings → Pages → Source: GitHub Actions** (one-time manual step).

## Licensing

**Code** (`src/components/`, `docusaurus.config.ts`, build configuration,
and related source files) is licensed under the **MIT License**. See the
[LICENSE](LICENSE) file for details.

**Written content** (`docs/case-studies/`, `docs/samples/`, `docs/meta/`,
About page, and all other prose content) is © Radim Kocourek. All rights
reserved unless otherwise noted. This content is not covered by the MIT
license and may not be reused without explicit permission.
