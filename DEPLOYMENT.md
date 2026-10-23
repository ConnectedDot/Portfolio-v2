# Deploy the redesigned portfolio through GitHub and Vercel

The connected GitHub integration rejected the attempted source upload with `403: Resource not accessible by integration`. No branch or repository file was changed. This archive is the tested standalone source.

## Put the source on a new branch

Use a fresh clone so your existing local work is separate:

```bash
git clone https://github.com/ConnectedDot/Portfolio-v2.git Portfolio-v2-redesign
cd Portfolio-v2-redesign
git switch -c feature/senior-portfolio-redesign
git rm -r -- .
```

The final command removes the old tracked project files from this new branch's working tree. It keeps Git history and leaves the remote `Dev` and `Testing` branches unchanged.

Extract the ZIP into a temporary folder, then copy **all its contents** into `Portfolio-v2-redesign`, including `.gitignore`. Keep the clone's `.git` directory. `package.json`, `vercel.json` and `src` should be directly at the repository root, not inside an extra nested folder.

This is a complete source snapshot. Replace the previous project files rather than layering it over old `src`, `public`, PostCSS or Tailwind configuration; stale configuration can make the new minimal build fail.

Run:

```bash
npm ci
npm run build
git add .
git commit -m "Redesign developer portfolio and restore Cal.com booking"
git push -u origin feature/senior-portfolio-redesign
```

## Vercel

The archive includes `vercel.json`:

- Framework: Vite
- Root directory: repository root
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Required environment variables: none

With the existing Git integration, a new branch push may create a Preview deployment. The production portfolio changes only when the selected production branch is updated or the deployment is deliberately promoted. Check that branch choice before merging.

The Cal.com event remains `theophilus-samuel/30min`. No API key is required. Dates, timezones and booking are handled by the live embed and its direct-link fallback.

The separate ChatGPT Sites portfolio remains owner-private. Vercel previews have their own access settings; configure Deployment Protection there if privacy is required. The retained `noindex` metadata does not provide access control.
