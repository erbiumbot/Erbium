const Command = require("../../Base/Command");

class Play extends Command {

    constructor(client) {
        super(client);

        this.config({
            name: "play",
            aliases: ["p"],
            description: "Plays a song in a voice channel",
            permissions: []
        });
    }

    async run(message, args) {
        if (!message.member.voice.channel) return message.reply("❌ | You are not in a voice channel!");
        if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply("❌ | You are not in my voice channel!");
        if (message.member.voice.channel.joinable && !message.member.voice.channel.speakable) return message.reply("❌ | Oi mate, I am unable to speak in your voice channel, maybe I dont have enough permissions?");
        const query = args.join(" ");
        if (!query) return message.reply("❌ | Please include a search query!");

        await this.client.player.play(message, query, true);
    }

}

module.exports = Play;
