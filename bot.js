const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [/*Put your discord bot intents*/]
});
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n');

client.once('ready', () => {
    console.log('Lets help some people...')
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return

    const { commandName } = interaction

    if (commandName == 'ping') {
        await interaction.reply('Pong!')
    }
})

client.login(/*Put-your-token-here*/)
