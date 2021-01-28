module.exports = {
    name: '재생',
    aliases: ['재생'],
    category: 'Music',
    utilisation: '{prefix}재생 [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}   보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} 같은보이스채널 참가해주세요`);

        if (!args[0]) return message.channel.send(`${client.emotes.error}   (대충 재목을 넣으라는말) `);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};