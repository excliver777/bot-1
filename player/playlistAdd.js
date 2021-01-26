module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} 추가됨 (**${playlist.tracks.length}** 노래) !`);
};