module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - 멤버가 있지않아 음악이 종료되었습니다 전기를 아껴주세요 !`);
};