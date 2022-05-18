module.exports = {
    name: 'music',
    aliases: ['music'],
    category: 'Core',
    utilisation: '{prefix} music <command>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: 'Music Help' },
                    footer: { text: '\nRefer:\nIf you need any help for specific command you can use this:\nExamples: (yoru) {help} [loop]' },
                    fields: [
                        { name: 'debug', value: infos },
                        { name: 'music', value: music },
                        { name: 'For more help type:', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `use command with "yoru"`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: 'help' },
                    footer: { text: 'If you need other help type `yoru help`' },
                    fields: [
                        { name: 'name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: '',
                }
            });
        };
    },
};