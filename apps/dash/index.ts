export default {
	fetch(request) {
    const url = new URL(request.url);
    console.log(url.pathname);

		return new Response("Worker responded", { status: 200 });
	},
} satisfies ExportedHandler
