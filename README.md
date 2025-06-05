There's 2 issues here:


1. The router doesn't see the dash worker when the dash worker is being ran through vite
- start router with `pnpm wrangler dev`
- start dash with `pnpm dev` (which is vite)


2. The dash worker does not see the auth service when it's being ran through vite
- start auth service with `pnpm wrangler dev`
- start dash with `pnpm dev` (which is vite)

Throws:
```
error when starting dev server:
AssertionError [ERR_ASSERTION]: auth-svc does not match a worker name.
    at getWorkerToWorkerEntrypointNamesMap (file:///Users/alex/owlie/node_modules/.pnpm/@cloudflare+vite-plugin@1.4.0_rollup@4.39.0_vite@6.3.5_@types+node@22.15.21_jiti@2.4.2__36af23992f14b7b03aa85a56f7e95db4/node_modules/@cloudflare/vite-plugin/dist/index.js:13382:9)
    at getDevMiniflareOptions (file:///Users/alex/owlie/node_modules/.pnpm/@cloudflare+vite-plugin@1.4.0_rollup@4.39.0_vite@6.3.5_@types+node@22.15.21_jiti@2.4.2__36af23992f14b7b03aa85a56f7e95db4/node_modules/@cloudflare/vite-plugin/dist/index.js:13613:44)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async configureServer (file:///Users/alex/owlie/node_modules/.pnpm/@cloudflare+vite-plugin@1.4.0_rollup@4.39.0_vite@6.3.5_@types+node@22.15.21_jiti@2.4.2__36af23992f14b7b03aa85a56f7e95db4/node_modules/@cloudflare/vite-plugin/dist/index.js:14511:37)
    at async _createServer (file:///Users/alex/owlie/node_modules/.pnpm/vite@6.3.5_@types+node@22.15.21_jiti@2.4.2_lightningcss@1.30.1_terser@5.39.0_tsx@4.19.4_yaml@2.7.1/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:38657:20)
    at async CAC.<anonymous> (file:///Users/alex/owlie/node_modules/.pnpm/vite@6.3.5_@types+node@22.15.21_jiti@2.4.2_lightningcss@1.30.1_terser@5.39.0_tsx@4.19.4_yaml@2.7.1/node_modules/vite/dist/node/cli.js:753:20)
```

If all workers are started with wrangler dev, they all show [connected] in their respective "parent".
