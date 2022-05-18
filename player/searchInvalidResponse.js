module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success}  canceled!`);
    } else message.channel.send(`${client.emotes.error}  type proper number. from **1** to **${tracks.length}** `);
};