const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const rojs = require('@rojs/ro-js');
const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('getuserfromid')
        .addNumberOption(option => option.setName('id').setDescription('An UserID of user in Roblox.'))
        .setDescription('Get username from ID!'),
    async execute(interaction) {
        const number = interaction.options.getNumber('id');

        function call(request) {
            const exampleEmbed = new MessageEmbed()
            exampleEmbed.setColor('#deff98')
            exampleEmbed.setTitle('Response')
            exampleEmbed.setDescription('**Code**\n```const rojs = require("@rojs/ro-js");\nrojs.GetUsernameByID(' + number + ', callback);```')
            exampleEmbed.addFields({
                name: 'Username',
                value: request
            }, )
            interaction.reply({
                embeds: [exampleEmbed],
                ephemeral: false
            })
        }
        rojs.GetUsernameByID(number, call);
    },
};
