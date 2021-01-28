module.exports = {
    name: '재생목록',
    aliases: ['재생목록'],
    category: 'Music',
    utilisation: '{prefix}재생목록',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} 보이스 채널 참가조옴 !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} 같은 보이스채널에 참가해주세요`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error}  아무노래 플레이하고 있지않음`);

        message.channel.send(`**서버 재생목록 - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\n현재재생중 : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (신청한 사람 : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `그리고 **${queue.tracks.length - 5}** 다른노래들...` : `플레이목록 **${queue.tracks.length}** 음악...`}`));
    },
};