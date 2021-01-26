module.exports = {
    name: '스킵',
    aliases: ['스킵', 'ㄱㄱ', '건너뛰기'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}  보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  같은보이스채널에 있지않음 !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} 아무 음악 없음 !`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success}  음악 **건너뜀** !`);
    },
};