const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks the selected user')
		.addUserOption(option => option.setName('target').setDescription('The member to kick').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Kick reason').setRequired(false))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
		await interaction.reply({ content: `*${target.user.username + '#' + target.user.discriminator} has been exiled to Brazil.* (kicked)\nReason: ${reason}` });
		await target.kick(`${reason}`);
	},
};