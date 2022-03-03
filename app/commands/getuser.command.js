const { SlashCommandBuilder } = require('@discordjs/builders');
const rojs = require('@zlures/rojs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getuser')
		.setDescription('Replies with an username from ID')
	  .addNumberOption(option => option.setName('num').setDescription('ID of user'))
    const number = interaction.options.getNumber('num');
    function call(user) {
      return user
    }
    interaction.reply(rojs.GetUsernameFromID(number, call));
};
