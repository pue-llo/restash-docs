# Restash docs

Public documentation site for Restash, built with
[Astro Starlight](https://starlight.astro.build).

- **Source of truth (content):** `faq-content` document on
  [RES-20](/RES/issues/RES-20).
- **Scaffold tracker:** [RES-47](/RES/issues/RES-47).
- **Publish blocker:** [RES-27](/RES/issues/RES-27) — email sweep + Support
  Ops greenlight. **No DNS / production publish until RES-27 closes.**

## Local development

```bash
nvm use            # picks up .nvmrc (Node 20)
npm install
npm run dev        # http://localhost:4321
npm run build      # writes static site to ./dist/
npm run preview    # serves ./dist/ locally
```

## Support-email config

The support address shown in every `mailto:` link and on the Contact page
lives in one place: `src/config/site.ts`.

- Default: `progresswithpuello@gmail.com`.
- Override at build time with the `PUBLIC_SUPPORT_EMAIL` env var
  (Cloudflare Pages → Project → Settings → Environment variables).

`src/components/MailLink.astro` renders the address as a `<a
href="mailto:…">` link. Every doc page that mentions support imports
`MailLink` and uses `<MailLink />`, so swapping the address updates the
whole site.

## Cloudflare Pages preview deploy

Repo placement: [`pue-llo/docs`](https://github.com/pue-llo/docs)
(redirected from `cfacryptopro/docs` — that org does not exist on
GitHub; this repo follows the same `pue-llo/*` namespace used by
[`pue-llo/cooped-labs-site`](https://github.com/pue-llo/cooped-labs-site)).
If a `cfacryptopro` GitHub org is created later, transfer the repo via
**Settings → Transfer ownership**.

Project setup (one-time):

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick the `pue-llo/docs` repo.
3. Framework preset: **Astro**.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
6. Environment variables:
   - `NODE_VERSION` = `20`
   - `PUBLIC_SUPPORT_EMAIL` = leave unset to use the default, or set the
     address Support Ops picks via [RES-27](/RES/issues/RES-27).
7. Save & deploy. Cloudflare will publish to a `*.pages.dev` URL — that's
   the preview that goes to Support Ops for review.

**Production DNS (`docs.cfacryptopro.com`) is intentionally deferred.**
Wait for [RES-27](/RES/issues/RES-27) to close and for Support Ops to
comment "ok publish" on [RES-47](/RES/issues/RES-47). Then add a
**Custom domain** in Pages → bind `docs.cfacryptopro.com`.

## Content layout

```
src/
├── components/
│   └── MailLink.astro          # renders SUPPORT_EMAIL as a mailto link
├── config/
│   └── site.ts                 # SUPPORT_EMAIL constant + override hook
└── content/
    └── docs/
        ├── index.mdx           # landing page
        ├── getting-started/
        │   ├── install.mdx
        │   ├── accessibility-permission.mdx
        │   └── activate-your-license.mdx
        ├── troubleshooting/
        │   ├── app-wont-open.mdx
        │   ├── accessibility-prompt.mdx
        │   ├── license-key-not-accepted.mdx
        │   ├── update-or-reinstall.mdx
        │   └── logs.mdx
        ├── billing/
        │   ├── find-your-license.mdx
        │   ├── move-to-new-mac.mdx
        │   └── refund-policy.mdx
        ├── known-issues.mdx
        └── contact.mdx
```

The sidebar mirroring this hierarchy is configured in `astro.config.mjs`.

## Search

Starlight ships with [Pagefind](https://pagefind.app) out of the box. It
runs as part of `astro build` and powers the search bar in the rendered
site.

## Known content gaps (tracked elsewhere)

- **Refund-policy wording** — placeholder until Kevin lands the final
  paragraph (parent issue [RES-20](/RES/issues/RES-20)).
- **Notarised-build callouts** — install and "damaged warning" pages will
  drop the workaround once notarisation ships.
- **In-app `Help` menu + marketing footer link** — Support Ops files
  those once the production URL is live.

Spot a copy error? Comment on
[RES-20 → `faq-content`](/RES/issues/RES-20#document-faq-content) rather
than fixing in flight.
