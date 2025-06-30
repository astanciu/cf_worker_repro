# Cloudflare Queue Reproduction repo

## Problem
When developing locally, a producer and consumer do not successfully connect to the queue when both are started using separate `wrangler dev` commands.

## Run

```
pnpm install

# In terminal 1
cd apps/producer
pnpm dev


# In terminal 2
cd apps/consumer
pnpm dev

```

Then send an http request to the address/port show on startup, likely `http://localhost:8787`.

The consumer won't show the received message.


## Running from the same command, with "-c"
If you start both workers from the same `worker dev` instance, with multiple `-c` configurations, it does work.

This can be tried via:

```
pnpm run both
```
