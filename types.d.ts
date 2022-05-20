export 
interface BotOptions {
    token: string,
    name: string
    color: string
    onlineMessage?: string
    channel: string
    avoidServerChrash?: boolean
    logDisconnectReason?: boolean
    logOnConnect?: string 
}