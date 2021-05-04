const Command = require("../../Base/Command");

class Pause extends Command {

    constructor(client) {
        super(client);

        this.config({
            name: "pause",
            aliases: [],
            description: "Pause the player",
            permissions: []
        });
    }

    async run(message, args) {
        if (!message.member.voice.channel) return message.reply("❌ | You are not in a voice channel!");
        if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) return message.reply("❌ | You are not in my voice channel!");

        const queue = this.client.player.getQueue(message);
        if (!queue) return message.reply("❌ | I am not playing anything?");
        if (queue.paused) return message.reply("❌ | The music player is already paused!")
        queue.player.pause(message);

        message.reply("⏸ | Paused!");
    }

}

module.exports = Pause;
