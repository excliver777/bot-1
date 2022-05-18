module.exports = {
    name: 'skip',
    aliases: ['skip', 'skip', 'Skip'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}  Join VC !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  i cant clone jiubai`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} No music get good kanasai`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success}  MUSIC **SKKIPED** !`);
    },
};