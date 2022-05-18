module.exports = {
    name: 'stop',
    aliases: ['stop', 'Stop', 'stoppp'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} Join`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  Lmao atleast you tried`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error}  nosong`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success}  SUCCESFULLY **STOPPED**`);
    },
};