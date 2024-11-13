const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const lang = require('../../events/loadLanguage');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription(lang.supportDescription),
    async execute(interaction) {
        const supportServerLink = lang.discord;
        const githubLink = lang.github;
        const replitLink = lang.replit;
        const youtubeLink = lang.youtubelink;

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: lang.supportTitle,
                iconURL: lang.supportIconURL,
                url: supportServerLink
            })
            .setDescription(`
                ➡️ **${lang.supportDescriptionTitle}:**
                - ${lang.discord} - ${supportServerLink}
                
    
            `)
            .setImage(lang.supportImageURL)
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
