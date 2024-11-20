const { Client } = require('discord.js');

module.exports = class Hestia extends Client {
    constructor(options) {
        super(options);
    }


    login(token) {
        super.login(token);
    }
}