module.exports = {
    name: '멈춰',
    aliases: ['멈춰', 'stop', '스탑'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} 보이스 채널 참가 부탁드립니다 손님^^`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} 같은 보이스채널 참가하고 계시지 않습니다.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error}  아무노래 안틀고 있으신데 ㅇㅁㅇ`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success}  성공적으로 **음악이 멈췄습니다**`);
    },
};