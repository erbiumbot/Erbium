const { GuildMember } = require("discord.js");

class Util {

    static properCase(str) {
        return str.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

    static formatDuration(ms, number) {
        return  if (isNaN(ms)) throw new Error("Value is not a number");
 return require('pretty-ms')(ms, {
 verbose: true,
 compact: false,
 secondsDecimalDigits: 0
 });
    }

    static cleanText(text, token = process.env.DISCORD_TOKEN) {
        if (typeof text !== "string") text = require("util").inspect(text, { depth: 2 });

        text = text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/, "@" + String.fromCharCode(8203))
            .replace(new RegExp(token, "g") ?? "", "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

        return text;
    }

    static reverse(text) {
        return `${text}`.split("").reverse().join("");
    }

    static get buttons() {
        return {
            BLURPLE: 1,
            GRAY: 2,
            GREY: 2,
            GREEN: 3,
            RED: 4,
            URL: 5,
            LINK: 5
        };
    }

    static atob(text) {
        return Buffer.from(text ?? "", "base64").toString("utf-8");
    }

    static btoa(text) {
        return Buffer.from(text ?? "").toString("base64");
    }
}

module.exports = Util;
