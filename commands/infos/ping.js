module.exports = {
    name: '핑',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - 퐁! : **${client.ws.ping}ms** !`);
    },
};