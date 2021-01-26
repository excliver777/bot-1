module.exports = {
    name: '도움',
    aliases: ['도움'],
    category: 'Core',
    utilisation: '{prefix}도움 <명령어>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == '정보').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == '음악').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: '' },
                    footer: { text: '' },
                    fields: [
                        { name: '봇', value: infos },
                        { name: '음악', value: music },
                        { name: '맛있다', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `음 맛있다`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - 찾을수없음 !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: '' },
                    footer: { text: '' },
                    fields: [
                        { name: '이름', value: command.name, inline: true },
                        { name: '카테고리', value: command.category, inline: true },
                        { name: '이름', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: '사용법', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: '',
                }
            });
        };
    },
};