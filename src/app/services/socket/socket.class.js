"use strict";
const importer_1 = require("../../shared/importer");
io.sails.useCORSRouteToGetCookie = false;
io.sails.skipReconnect = true;
io.sails.reconnection = false;
class Socket {
    constructor(address) {
        this.address = address;
        Socket.sockets[address] = this;
    }
    static get socket() {
        return Socket.sockets[importer_1.connections.game.chosen];
    }
    connect(timeout = Socket.connectTimeout) {
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
    reconnectIntervally(trials = 3, initial = true, timeout = Socket.connectTimeout, interval = Socket.reconnectInterval) {
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
                        clearInterval(intervalId);
                        return reject(new Error(`Unsuccessfull trials`));
                    }
                });
            }, interval || Socket.reconnectInterval);
            if (initial) {
                this.connect(timeout).then(onSuccess).catch((err) => {
                });
            }
        });
    }
    post(path, data) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject(new Error(`Socket not connected.`));
            }
            this.socket.post(path, data, (response) => {
                return resolve(response);
            });
        });
    }
    get(path, data) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject(new Error(`Socket not connected.`));
            }
            this.socket.get(path, data, (response) => {
                return resolve(response);
            });
        });
    }
    on(path, data) {
        if (!this.socket) {
            throw new Error(`Socket not connected.`);
        }
        this.socket.on(path, data);
    }
    off(path) {
        if (!this.socket) {
            throw new Error(`Socket not connected.`);
        }
        this.socket.off(path);
    }
}
exports.Socket = Socket;
Socket.sockets = {};
Socket.connectTimeout = 2000;
Socket.reconnectInterval = 4000;
//# sourceMappingURL=socket.class.js.map