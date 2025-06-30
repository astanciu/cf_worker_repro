There's 2 issues here:


1. The router doesn't see the dash worker when the dash worker is being ran through vite
- start router with `pnpm wrangler dev`
- start dash with `pnpm dev` (which is vite)


2. The dash worker does not see the auth service when it's being ran through vite
- start auth service with `pnpm wrangler dev`
- start dash with `pnpm dev` (which is vite)

If all workers are started with wrangler dev, they all show [connected] in their respective "parent".
