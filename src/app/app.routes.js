"use strict";
const importer_1 = require("./shared/importer");
exports.ROUTES = [{
        path: '',
        component: importer_1.Connect,
    }, {
        path: 'login',
        component: importer_1.Login,
        canActivate: [importer_1.SocketConnected],
    }, {
        path: 'user/:login',
        component: importer_1.UserView,
        canActivate: [importer_1.SocketConnected],
    }, {
        path: 'user/:login/character-create',
        component: importer_1.CharacterCreate,
        canActivate: [importer_1.SocketConnected],
    }, {
        path: 'user/:login/character/:name',
        component: importer_1.CharacterView,
        canActivate: [importer_1.SocketConnected],
    }, {
        path: 'user/:login/character/:name/game',
        component: importer_1.Game,
        canActivate: [importer_1.SocketConnected],
    },
    {
        path: 'error',
        component: importer_1.ErrorView,
    },
    {
        path: '**',
        component: importer_1.NoContent,
    }];
//# sourceMappingURL=app.routes.js.map