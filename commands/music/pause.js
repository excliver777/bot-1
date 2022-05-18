module.exports = {
    name: 'pause',
    aliases: ['pause'],
    category: 'Music',
    utilisation: '{prefix}일시정지',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}   Join`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} you think im in your vc? I go flash you`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} no music leh`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} song alr stopped`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success}  Song ${client.player.getQueue(message).playing.title}stop`);
    },
};