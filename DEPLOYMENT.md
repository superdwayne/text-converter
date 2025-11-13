# Deployment Guide - Vercel

## Quick Start

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy

From the project root directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- Project name? Enter a name or press Enter for default
- Directory? **./** (current directory)

### 4. Deploy to Production

```bash
vercel --prod
```

## Testing the API

After deployment, Vercel will provide you with a URL like:
```
https://your-project-name.vercel.app
```

Test the API:

```bash
curl -X POST https://your-project-name.vercel.app/api/compress \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello, how are you doing today?"}'
```

## Local Development

Run the API locally:

```bash
vercel dev
```

This will start a local server at `http://localhost:3000` and you can test the endpoint at:
```
http://localhost:3000/api/compress
```

## Environment Variables

No environment variables are required for this API. It's fully self-contained.

## Project Structure for Vercel

Vercel automatically detects:
- `api/` folder for serverless functions
- `vercel.json` for configuration
- ES modules (type: "module" in package.json)

## Troubleshooting

### Function not found
- Ensure `api/compress.js` exists
- Check that `vercel.json` routes are correct

### Import errors
- Verify `lib/compressor.js` exists
- Check that imports use `.js` extension

### CORS issues
- The API already includes CORS headers
- If issues persist, check browser console for specific errors

## Updating the API

After making changes:

1. Test locally: `vercel dev`
2. Deploy: `vercel --prod`

Vercel will automatically update the production deployment.

