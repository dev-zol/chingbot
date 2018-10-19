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
            'are'
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
        const chance = parseInt(Math.random() * 16);

        for(const question in questions) {
            console.log(question)
            if(args[0] === questions[question]) {
                message.channel.send(answers[chance]);
            } else {
                message.channel.send('retardo, that\'s not a good question');
            }
        }
    }
}
