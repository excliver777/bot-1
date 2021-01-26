module.exports = {
    name: '도움',
    aliases: ['도움'],
    category: 'Core',
    utilisation: '{prefix}도움 <명령어>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: '' },
                    footer: { text: '' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
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
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};