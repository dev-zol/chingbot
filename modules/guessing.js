const client = require('../bot/testbo.js')


module.exports = {
    name: 'guess',
    description: 'usage: !guess [int number from 1-100]',
    execute(message, args) {
        if (args[0] >= 1 && args[0] <= 100) {
            console.log(args[0]);
            let a = parseFloat(args[0]);
            let g = Math.floor(Math.random() * 100) + 1;
            let guessed = false;
            let i = 1;
            let gg = [];
            while (!guessed) {
                if (a === g) {
                    let string = "";
                    for (l in gg) {
                        string += gg[l] + " , ";
                    }
                    guessed = true;
                    message.channel.send("I guessed " + string);
                    message.channel.send("I guessed " + g + " after " + i + " time(s)!");

                } else {
                    if (gg.indexOf(g) === -1) {
                        gg.push(g);
                        i += 1;
                    }
                    g = Math.floor(Math.random() * 100) + 1;

                }
            }

        } else {
            message.channel.send("that\'s not a number dummy, or it's not in the range 1-10");
        }
    },
};


/** FORMAT FOR ANY MODULE
 * name: '[name of command]',
 * description: '[description of command]',
 * execute(message, args) {
 *     [whatever you want it to do]
 * }
 */