
# Deployment Guide

## Cloudflare Pages Configuration

To avoid the `nodejs_compat` error, please use the following settings in your Cloudflare Pages dashboard:

1. **Framework preset**: `None`
2. **Build command**: `npm run build`
3. **Build output directory**: `out`

> **Note**: Do not select "Next.js" as the framework preset, as it defaults to using `@cloudflare/next-on-pages` which requires server-side configuration that conflicts with our static export setup.
