module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        const m = message.channel.send("pong?");
    },
};

/** FORMAT FOR ANY MODULE
 * name: '[name of command]',
 * description: '[description of command]',
 * execute(message, args) {
 *     [whatever you want it to do]
 * }
 */