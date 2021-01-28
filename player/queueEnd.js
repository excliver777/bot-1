module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error}  대기열에 음악이없어 종료되었습니다.`);
};