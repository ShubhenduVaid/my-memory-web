# My Memory — Web

Public website for **My Memory** (the desktop app).

- Main repo: https://github.com/ShubhenduVaid/my-memory
- Releases: https://github.com/ShubhenduVaid/my-memory/releases

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

1) Import this repo in Vercel.
2) (Optional but recommended) Set an environment variable:

- `NEXT_PUBLIC_SITE_URL=https://<your-domain>`

If you don’t set it, the site will fall back to Vercel’s `VERCEL_URL` automatically.

## Production build

```bash
npm run build
npm run start
```

## License

MIT
