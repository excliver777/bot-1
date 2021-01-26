module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - 검색결과가 없습니다. ${query} !`);
};