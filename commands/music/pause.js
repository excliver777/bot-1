module.exports = {
    name: '일시정지',
    aliases: ['일시정지', '잠시만'],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -  보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} 같은 보이스 채널에 있어주세요`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} 아무음악 플레이를 안함`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} 음악 이미 멈춤`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title}멈춤`);
    },
};