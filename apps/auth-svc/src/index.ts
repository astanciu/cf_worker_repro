import { WorkerEntrypoint } from "cloudflare:workers";

export class AuthService extends WorkerEntrypoint {
  env: Env;

  constructor(ctx: ExecutionContext, env: Env) {
    super(ctx, env);
    this.env = env;
    console.log("AuthService: ", this.env);
  }

  debug() {
    console.log("hello debug");
    console.log(this.env);
  }
}

export default class extends WorkerEntrypoint {
  async fetch(req) {
    return new Response("Auth Service");
  }
}
