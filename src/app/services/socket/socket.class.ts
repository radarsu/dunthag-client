import {
    connections,
} from '../../shared/importer';

declare let io: any;
io.sails.useCORSRouteToGetCookie = false;
io.sails.skipReconnect = true;
io.sails.reconnection = false;

export class Socket {
    public static sockets: {
        [address: string]: Socket
    } = {};
    public static connectTimeout = 2000;
    public static reconnectInterval = 4000;
    public static get socket() {
        return Socket.sockets[connections.game.chosen];
    }

    private socket: any;
    constructor(private address: string) {
        Socket.sockets[address] = this;
    }

    public connect(timeout: number = Socket.connectTimeout) {
        return new Promise((resolve, reject) => {
            this.socket = io.sails.connect(this.address);

            this.off('connect');
            this.on('connect', () => {
                return resolve();
            });

            setTimeout(() => {
                if (!this.socket.isConnected()) {
                    return reject(new Error(`Socket not connected.`));
                }
            }, timeout);
        });
    }

    public reconnectIntervally(
        trials: number = 3,
        initial: boolean = true,
        timeout: number = Socket.connectTimeout,
        interval: number = Socket.reconnectInterval,
    ) {
        return new Promise((resolve, reject) => {
            if (interval < Socket.connectTimeout) {
                throw new Error(`Interval cannot be lower than connect timeout.`);
            }

            let intervalId;
            let onSuccess = () => {
                clearInterval(intervalId);
                return resolve();
            };

            this.off('connect');
            this.on('connect', onSuccess);

            intervalId = setInterval(() => {
                this.connect(timeout).then(onSuccess).catch((err) => {
                    trials--;
                    console.log(`Failed to reconnect, trials left: ${trials}`);
                    if (trials === 0) {
                        // failure
                        clearInterval(intervalId);
                        return reject(new Error(`Unsuccessfull trials`));
                    }
                });
            }, interval || Socket.reconnectInterval);

            if (initial) {
                this.connect(timeout).then(onSuccess).catch((err) => {
                    //
                });
            }
        });
    }

    public post(path: string, data?: any) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject(new Error(`Socket not connected.`));
            }

            this.socket.post(path, data, (response: any) => {
                return resolve(response);
            });
        });
    }

    public get(path: string, data?: any) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject(new Error(`Socket not connected.`));
            }

            this.socket.get(path, data, (response: any) => {
                return resolve(response);
            });
        });
    }

    public on(path: string, data: (...args: any[]) => void) {
        if (!this.socket) {
            throw new Error(`Socket not connected.`);
        }

        this.socket.on(path, data);
    }

    public off(path: string) {
        if (!this.socket) {
            throw new Error(`Socket not connected.`);
        }

        this.socket.off(path);
    }

}
