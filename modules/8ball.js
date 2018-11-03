module.exports = {
    name: 'chingball',
    description: 'chingbot will search your soul',
    execute(message, args) {
        const questions = [
            'does',
            'will',
            'am',
            'is',
            'did',
            'do',
            'can',
            'as',
            'are',
			'was'
        ];

        const answers = [
            'Sure i guess',
            'i mean why not',
            'sur',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'probs',
            'Outlook good',
            'Yes',
            'Ching says yes',
            'Don\'t count on it',
            'can you don\'t',
            'yah, no',
            'don\'t do it',
            'definitely.not',
            'no, kys yourself'
        ];
        const chance = parseInt(Math.random() * answers.length);

        for(const question in questions) {
            if(args[0] === questions[question]) {
                message.channel.send(answers[chance]);
                return;
            }
        }
        message.channel.send('idiot, ask a real question');
    }
}

/** FORMAT FOR ANY MODULE
 * name: '[name of command]',
 * description: '[description of command]',
 * execute(message, args) {
 *     [whatever you want it to do]
 * }
 */
