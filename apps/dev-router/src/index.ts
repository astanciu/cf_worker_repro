export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    console.log(`Dev Router received: ${url}`);

    return env.DASHBOARD.fetch(request);

  },
};
