module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} = ${playlist.title} added (**${playlist.tracks.length}** song) !`);
};