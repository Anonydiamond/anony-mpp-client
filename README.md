### Thanks for using this package
#### This package connets your bot faster

##### -easy to use
##### -no errors

### How to install:


## NPM:
```bash
npm i anony-mpp-client
```

## Yarn:
```bash
yarn add anony-mpp-client
```


## USAGE
```js
const Bot = require('anony-mpp-client');

const bot = new Bot({
    name: "your bot name here",
    color: "your bot color here (hex code)",
    channel: "enter room name here",
    logDisconnectReason: true || false, //this thing logs the reason to console if bots got disconnect
    avoidServerCrash: true || false, //this thing can handle server chrashes
    onlineMessage: 'Online', //this is optional
    logOnConnect: 'Connected' //this is optional, this thing log to the console bot got connect, by default its Connected to {room}

    //uri is optional, default: mppclone.com:8443
}, 'uri here').login('your bot token here')

var prefix = "!"

bot.client.on('a', msg => {
    let cmd =  msg.a.split(' ')[0]

    if (cmd === `${prefix}ping`) {
        bot.chat("Pong!");
    }
})
```

#### Peace ---