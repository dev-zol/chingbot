const { RichEmbed } = require('discord.js');
const client = require('../bot/testbo')
const clientRef = client.clientRef

module.exports = {

    name: 'help',
    description: 'Help Me!',
    execute(message, args) {
        const embed = new RichEmbed().setTitle('Help Page').setColor('#30c11d')

        embed.addField('help', 'displays this help page');
        embed.addField('ping', 'displays latency');
        embed.addField('chingball', 'ask chingbot for the wisdom of a god');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    },
};