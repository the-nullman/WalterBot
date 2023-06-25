const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roulette')
		.setDescription('Play some russian roulette! You have a 1 in 6 chance of "winning".'),

	async execute(interaction) {
		// Quite a hacky way to get random integers.
		function getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
		const target = interaction.options.getMember();
		// If you use const here, it will stick to only a single value.
		// eslint-disable-next-line prefer-const
		let roll = getRandomIntInclusive(1, 6);
		if (roll == 4) {
			await interaction.reply(`A deafening bang is heard in the room. ${target.user.username} has painted the walls red, and now shares the fate of Kurt Cobain.`);
			console.log(roll);
		}
		else {
			await interaction.reply(`${target.user.username} has pulled the trigger of the revolver. A loud click can be heard, but no bang. Lucky one.`);
			console.log(roll);
		}
	},
};