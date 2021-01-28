module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} 음악 재생중이 아님!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error}  보이스채널 참가좀 좀!!!! !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error}  권한부족 !`);
            break;
        default:
            message.channel.send(`${client.emotes.error}  에러뜸 : ${error}`);
    };
};
