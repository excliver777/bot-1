module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} no music playing`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} JOIN VC jibai !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error}  wait wait im lagging sorry ah, wait you try to connect again wo ai ni `);
            break;
        default:
            message.channel.send(`${client.emotes.error} Error : ${error}`);
    };
};
