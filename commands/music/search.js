module.exports = {
    name: 'play',
    aliases: ['play'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} join vc i go flash you`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  not same vc`);

        if (!args[0]) return message.channel.send(`${client.emotes.error}  Title pls`);

        client.player.play(message, args.join(" "));
    },
};