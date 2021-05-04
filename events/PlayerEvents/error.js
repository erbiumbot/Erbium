const Event = require("../../Base/Event.js");
const { Constants } = require("discord-player");

class PlayerErrorEvent extends Event {

    constructor(client) {
        super(client);
    }

    run(error, message, ...args) {
        switch (error) {
            case Constants.PlayerErrorEventCodes.NOT_PLAYING:
                void message.reply("❌ | I am not playing anything?");
                break;
            case Constants.PlayerErrorEventCodes.NOT_CONNECTED:
                void message.reply("❌ | You are not connected to a voice channel!");
                break;
            case Constants.PlayerErrorEventCodes.UNABLE_TO_JOIN:
                void message.reply("❌ | Oi mate, I am unable to join your voice channel, maybe I dont have enough permissions?");
                break;
            case Constants.PlayerErrorEventCodes.VIDEO_UNAVAILABLE:
                void message.reply(`❌ | Song **${args[0].title}** is not available in your location!`);
                break;
            case Constants.PlayerErrorEventCodes.MUSIC_STARTING:
                void message.reply("❌ | Music player is starting, please wait!");
                break;
            default:
                void message.reply(`❌ | Something went wrong! Error: ${error}`);
        };
    }

}

module.exports = PlayerErrorEvent;
