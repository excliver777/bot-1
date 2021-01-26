module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - 취소됨!`);
    } else message.channel.send(`${client.emotes.error} - 제대로된 숫자를 입력해주세요. **1** 그리고 **${tracks.length}** !`);
};