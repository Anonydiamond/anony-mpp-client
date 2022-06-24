declare class Bot {
    constructor(
        Options: import('../types').BotOptions,
        uri?: string
    ): this

    name: string
    color: string
    room: string
    
    login<T extends string>(
        token: T
    ): this

    client: import('../Client')

    /**
     * disconnects the bot
     */
    disconnect(): void

    chat<T extends string, K extends number>(
        message: T,
        delay?: K
    ): void

    /**
     * 
     * @param dir Enter a midi file dir like ./midi/file.mid
     */
    playMidi<T extends string>(
        dir: T
    ): void

    /**
     * stops the midi from playing if the bot is playing
     */
    stopMidi(): void
}
export = Bot