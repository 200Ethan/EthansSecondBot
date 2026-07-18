module.exports = {
	name: 'shardDisconnect',
	once: false,
	async execute(client) {
        console.error('Discord client error:', error);
        process.exit(1); // Force the process manager to restart
	},
};