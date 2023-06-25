// Originally this slash command was supposed to be a fake kick notifier/embed tester, but Discord just breaks when you use it.
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('keek')
		.setDescription('Troll the folks around you by faking the kick message!')
		.addUserOption(option => option.setName('target').setDescription('The member to troll').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Fake kick reason').setRequired(false)),
	testEmbed: new EmbedBuilder()
		.setColor(0x52EE54),
	// embed end
	async execute(interaction) {
		const channel = interaction.channel.id;
		const target = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		// await interaction.reply({ content: `*${target.user.username + '#' + target.user.discriminator} has been exiled to Brazil.* (kicked)\nReason: ${reason}` });
		channel.send({ embeds: [this.testEmbed.setDescription(`${target.user.username}#${target.user.discriminator} has been banned.`)] });
	},
};