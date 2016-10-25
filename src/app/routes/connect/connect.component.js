"use strict";
const importer_1 = require("../../shared/importer");
let Connect = class Connect {
    constructor(title, router, zone, toastr) {
        this.title = title;
        this.router = router;
        this.zone = zone;
        this.toastr = toastr;
        this.version = '0.0.0';
        this.status = 'Proszę czekać';
        this.comment = 'Sprawdzanie łączności...';
        this.loading = true;
    }
    ngOnInit() {
        console.log('hello `Connect` component');
        this.proceed().catch((err) => {
        });
    }
    proceed() {
        return __awaiter(this, void 0, void 0, function* () {
            importer_1.connections.game.chosen = importer_1.connections.game.dev;
            if (window.location.hostname === 'shardgame.pl') {
                importer_1.connections.game.chosen = importer_1.connections.game.prod;
            }
            let socket = new importer_1.Socket(importer_1.connections.game.chosen);
            yield socket.connect().catch((err) => {
                this.setOfflineMessages();
            });
            yield socket.reconnectIntervally(Infinity).catch((err) => {
                throw err;
            });
            this.onConnected(socket);
        });
    }
    onConnected(socket) {
        socket.on('disconnect', (data) => this.onDisconnected(data));
        socket.on('error', (data) => this.onDisconnected(data));
        socket.on('toastr', (data) => this.onToastr(data));
        socket.on('path', (data) => this.onPath(data));
        this.title.setTitle('Dunthag - Online');
        this.status = 'Serwer online';
        this.comment = 'Połączono z serwerem.';
        this.loading = false;
        this.router.navigate(['/login']);
    }
    onDisconnected(reason) {
        this.router.navigate(['/']);
        this.setOfflineMessages();
    }
    onToastr(data) {
        this.toastr[data.type](`${importer_1._.upperFirst(data.message)}.`, importer_1._.upperFirst(data.title), {
            dismiss: 'click',
        });
    }
    onPath(data) {
        this.router.navigate([data.path]);
    }
    setOfflineMessages() {
        this.title.setTitle('Dunthag - Offline');
        this.status = 'Serwer offline';
        this.comment = 'Strona połączy się automatycznie, gdy tylko będzie to możliwe.';
    }
};
Connect = __decorate([
    importer_1.Component({
        selector: 'connect',
        providers: [importer_1.Title, importer_1.ToastsManager],
        styleUrls: ['./connect.style.scss'],
        templateUrl: './connect.template.html',
    }),
    __metadata("design:paramtypes", [importer_1.Title, importer_1.Router, importer_1.NgZone, importer_1.ToastsManager])
], Connect);
exports.Connect = Connect;
//# sourceMappingURL=connect.component.js.map