const bot = new (require('./lib'))({
    name: 't',
    color: '#a',
    channel: 'ssd',
}, 'wss://unknown mpp uri')
.login('this token is not valid')

bot.client.on('a', console.log)