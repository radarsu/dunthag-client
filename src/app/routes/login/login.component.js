"use strict";
const importer_1 = require("../../shared/importer");
let Login = class Login {
    constructor() {
        this.user = {
            login: '',
            password: '',
        };
    }
    ngOnInit() {
        console.log('hello `Login` component');
    }
    login() {
        console.log(`login`);
        importer_1.Socket.socket.post('/user/login', this.user);
    }
    signup() {
        importer_1.Socket.socket.post('/user/create', this.user);
    }
};
Login = __decorate([
    importer_1.Component({
        selector: 'login',
        providers: [],
        styleUrls: ['./login.style.scss'],
        templateUrl: './login.template.html'
    }),
    __metadata("design:paramtypes", [])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.component.js.map