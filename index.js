const hestia = require('./system/core/hestia');
const client = new hestia();


client.login(process.env.TOKEN);