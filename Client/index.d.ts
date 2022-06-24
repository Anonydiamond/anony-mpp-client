declare class Client {
    /**
     * Enter a data to send to ws
     */

    ppl: object | any
    uri: string
    ws: WebSocket
    serverTimeOffset: number
    user: Omit<participant, 'displayX' | 'displayY' | 'x' | 'y'>
    participantId: string
    ppl: object
    connectionTime: number | string
    connectionAttempts: any
    desiredChannelId: string
    desiredChannelSettings: Omit<channelSettings, 'lobby'>
    pingInterval: number
    canConnect: boolean
    noteBuffer: Array
    noteBufferTime: number



    isSupported(): boolean
    isConnected(): boolean
    isConnecting(): boolean
    start(): void
    stop(): void
    connect(): void
    bindEventListeners(): void


    send<T extends JSON | string | void>(
        raw: T
    ): void

    sendArray<T extends keyof args>(
        arr: {m: T}[] | args[T][]
    ): void

    on<T extends keyof listener>(
        event: T,
        listener: listener[T]
    ): void

    once<T extends keyof listener>(
        event: T,
        listener: listener[T]
    ): void

    off<T extends keyof listener>(
        event: T,
        listener: listener[T]
    ): void

    setChannel<T extends string, K extends channelSettings>(
        id: T,
        set: K
    ): void

    offlineChannelSettings: Pick<channelSettings, 'lobby' | 'visible' | 'chat' | 'crownsolo' | 'color'>
    
    getChannelSetting<T extends keyof SettingsOfChannel>(
        key: T
    ): string

    offlineParticipant(): Pick<participant, '_id' | 'name' | 'color'>
    setParticipants(
        ppl: object
    ): void

    countParticipants(): number

    participantUpdate<T extends participant>(
        update: T
    ): void

    removeParticipant<T extends string>(
        id: string
    ): void

    findParticipantById<T extends string>(
        id: string
    ): participant

    isOwner(): boolean

    preventsPlaying(): boolean

    receiveServerTime<T extends number>(
        time: T
    ): void
}


type args = {
    a: {
        message: string
    }

    userset: {
        set: {
            name: string
            color: string
        }
    }

    '+ls': void
    '-ls': void
    '+custom': void
    '-custom': void
    bye: void

    dm: {
        _id: string
        message: string
    }

    chown: {
        id?: string
    }

    kickban: {
        _id: string
        ms: number
    }

    m: cursor
    
    hi: {
        token: string
        login: {
            type: string
            code: string
        }
    }

    ch: {
        _id: string
        set: {
            visible: boolean
        }
    }

    chset: {
        set: SettingsOfChannel
    }

    custom: {
        data: object | any
    }

    devices: {
        list: device[]
    }

    n: {
        t: number
        n: notes[]
    }

    t: {
        e: number
    }

    unban: {
        _id: number
    }
}

interface cursor {
    x: number | string
    y: number | string
}

interface device {
    type: string
    manufacturer: string
    name: string
    version: string
    enabled?: boolean
    volume: number
}

interface participant {
    name: string
    id: string
    _id: string
    color: string
    x: number | string
    y: number | string
    displayX: number | string
    displayY: number | string
}

interface ppl {
    _id: string
    id: string
    name: string
    color: string
    tag: {
        text: string
        color: string
    }
    x: number | string
    y: number | string
}

interface message {
    m: 'a'
    a: string
    t: number
    p: participant
    
}

interface channelSettings {
    chat: boolean
    color: string
    color2: string
    crownsolo: boolean
    limit: number
    minOnlineTime: number
    'no cussing': boolean
    visible: boolean
    lobby: boolean
}

interface SettingsOfChannel {
    chat: boolean
    color: string
    color2: string
    crownsolo: boolean
    limit: number
    minOnlineTime: number
    'no cussing': boolean
    visible: boolean
}

interface ch {
    ch: {
        settings: SettingsOfChannel
        _id: string
        id: string
        count: number
        crown: {
            endPos: cursor
            startPos: cursor
            userId: string
            time: number
            participantId: string
        }
    }
    ppl: ppl
    p: string
}

interface custom {
    data: any[]
    p: string
}

interface dm {
    t: number
    a: string
    sender: ppl
    recipient: Pick<participant, '_id' | 'name' | 'color' | 'id'>
}

interface hi {
    t: number
    u: Omit<ppl, 'id'>
    token: string
    permissions: object
    accountInfo: {
        type: string
        username: string
        discriminator: string
        avatar: string
    }
}

interface ls {
    c: boolean
    u: {
        settings: Omit<SettingsOfChannel, 'minOnlineTime'>[]
        _id: string
        id: string
        count: number
        crown: {
            endPos: cursor
            startPos: cursor
            userId: string
            time: number
            participantId: string
        }
    } 

}

interface m {
    x: string | number
    y: string | number
    id: string
}

interface notes {
    n: string
    s: number
    d?: number
    v?: number
}

interface n {
    t: number
    n: notes
    p: string
}

interface notification {
    duration: number
    title: string
    target: string
    text: string
}

interface nq {
    maxHistLen: number
    max: number
    allowance: number
}

interface t {
    t: number
    e: number
}

type listener = {
    a: (message: message) => void
    b: (code: string) => void
    c: (c: message[]) => void
    'participant added': (user: participant) => void
    'participant removed': (user: participant) => void
    'participant update': (user: participant) => void
    p: (id: string) => void
    custom: (custom: custom) => void
    ch: (channel: ch) => void
    dm: (directMessage: dm) => void
    hi: (onopen: hi) => void
    ls: (ls: ls) => void
    m: (m: m) => void
    n: (n: n) => void
    notification: (n: notification) => void
    nq: (nq: nq) => void
    p: (p: Omit<participant, 'displayX' | 'displayY'>) => void
    t: (t: t) => void
}

export = Client