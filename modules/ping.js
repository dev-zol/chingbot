module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        const m = message.channel.send("pong?");
    },
};