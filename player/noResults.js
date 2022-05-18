module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error}  there is no such thing as ${query} !`);
};