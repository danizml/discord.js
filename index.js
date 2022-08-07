const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [8]
});
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n');

client.once('ready', () => {
    console.log('Hola Mundo')
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return

    const { commandName } = interaction

    if (commandName == 'ping') {
        await interaction.reply('Pong!')
    }
})

//client.login(process.env.token)
client.login(config.token)