console.log("Consumer started");

export default {
	async queue(batch, env): Promise<void> {
		const messages = JSON.stringify(batch.messages);
		console.log(`consumed from our queue: ${messages}`);
	},
};
