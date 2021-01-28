module.exports = {
    name: '검색',
    aliases: ['검ㅅ색'],
    category: 'Music',
    utilisation: '{prefix}검색 [이름/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} 보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  같은보이스채널에 있지않음 !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error}  재목좀 넣어주실레요??^^ 하..하... `);

        client.player.play(message, args.join(" "));
    },
};