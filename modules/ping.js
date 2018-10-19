const client = require('../bot/testbo.js')


module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        const m = message.channel.send("pong?").then((m) => {
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.clientRef.ping)}ms`);
        });
    },
};

/** FORMAT FOR ANY MODULE
 * name: '[name of command]',
 * description: '[description of command]',
 * execute(message, args) {
 *     [whatever you want it to do]
 * }
 */