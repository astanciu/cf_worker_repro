console.log("Producer started");

export default {
	async fetch(request, env): Promise<Response> {
		const log = {
			url: request.url,
			method: request.method,
			headers: Object.fromEntries(request.headers),
		};
		console.log("sending..");
		await env.QUEUE.send(log);
		console.log("Sent..");
		console.log(log);
		return new Response("Success!");
	},
};
