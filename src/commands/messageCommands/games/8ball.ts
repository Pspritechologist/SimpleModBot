const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    aliases: ['ball', '8'],
    cooldown: 3,
    async execute(message, args, data, client) {
        const answers = [
            'Yes, definitely!',
            'Definately! not..',
            'I guess so?',
            'Probably not.',
            'You never know',
            '¯\\_(ツ)_/¯',
            'I don\'t know.',
            'Maybe?',
            'No.',
            'Yes.',
            'I have doubts.',
            'I can\'t predict now.',
            'Try asking again.',
            'I am an 8 ball please stop asking me to answer your goddamn life questions, solve your problems yourself you lazy idiot!',
            'Whatever you say.',
            'Why are you asking me this?',
            'Can you not?..',
            'Fine.. Yes.',
            'No, I don\'t think so.',
            'I don\'t know, ask again later.',
            'When do I get to ask you questions?',
            'Why do you ask me questions? I want to ask you questions. Like why do you care about what a random number says?',
        ];

        const question = args.join(" ");
        if (question == 'ENA') return message.reply({ embeds: [new Discord.MessageEmbed().setDescription('Please provide a question to ask').setColor('GREY')] });

        const embed = new Discord.MessageEmbed()
            .setTitle('The Magic 8-Ball')
            .addField('Question:', `\`\`\`${question}\`\`\``)
            .addField('Answer:', `\`\`\`${answers[Math.floor(Math.random() * answers.length)]}\`\`\``)
            .setFooter(`Question asked by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("RANDOM");
        message.channel.send({ embeds: [embed] });

        if (message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            message.delete();
        }
    },
};