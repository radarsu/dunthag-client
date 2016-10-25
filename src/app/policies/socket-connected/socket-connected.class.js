"use strict";
const importer_1 = require("../../shared/importer");
let SocketConnected = class SocketConnected {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (!importer_1.Socket.socket) {
            this.router.navigate([]);
            return false;
        }
        return true;
    }
};
SocketConnected = __decorate([
    importer_1.Injectable(),
    __metadata("design:paramtypes", [importer_1.Router])
], SocketConnected);
exports.SocketConnected = SocketConnected;
//# sourceMappingURL=socket-connected.class.js.map