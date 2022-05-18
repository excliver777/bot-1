module.exports = {
    name: 'clear queue',
    aliases: ['cq', 'clear que' ,' song clear','clearque','Clear que','clear Que'],
    category: 'Music',
    utilisation: '{prefix}clear queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}  U join vc first`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  your not in same channel`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} no song leh`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error}  there is only one song playing you clear for what`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success}  track **deleted** !`);
    },
};