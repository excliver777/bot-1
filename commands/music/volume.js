module.exports = {
    name: '볼륨',
    aliases: ['볼륨'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}보이스 채널 참가좀!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error}  같은보이스 채널 참가해주세요`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} 아무음악 플레이안하는중!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} 번호좀 재대로 제발 ㅠㅡㅠ !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error}1부터 100 사이에 숫자를 적어주세요 ㅇㅅㅇ`);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`${client.emotes.success} 볼륨 **${parseInt(args[0])}%** 설정 완료!!`);
    },
};