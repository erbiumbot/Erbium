const Command = require("../../Base/Command");

class Resume extends Command {

    constructor(client) {
        super(client);

        this.config({
            name: "resume",
            aliases: [],
            description: "Resume the player",
            permissions: []
        });
    }

    async run(message, args) {
        if (!message.member.voice.channel) return message.reply("❌ | You are not in a voice channel!");
        if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply("❌ | You are not in my voice channel!");

        const queue = this.client.player.getQueue(message);
        if (!queue) return message.reply("❌ | I am not playing anything?");
        if (!queue.paused) return message.reply("❌ | The music player is not paused!");

        queue.player.resume(message);
        queue.player.pause(message);
        queue.player.resume(message);

        message.reply("▶ | Resumed!");
    }

}

module.exports = Resume;
