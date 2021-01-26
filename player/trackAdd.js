module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} 대기열의 추가됨 !`);
};