# Easy Media Agency

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated into `dist/`.

## Netlify

The repository is prepared for Netlify with [`netlify.toml`](/Users/SzegediBence/Documents/EasyMedia/Easy-Media-Agency/netlify.toml):

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

Set these environment variables in Netlify before deploy:

- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

You can copy the variable names from [`.env.example`](/Users/SzegediBence/Documents/EasyMedia/Easy-Media-Agency/.env.example).
