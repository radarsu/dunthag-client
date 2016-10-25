"use strict";
const core_1 = require("@angular/core");
let AppState = class AppState {
    constructor() {
        this._state = {};
    }
    get state() {
        return this._state = this._clone(this._state);
    }
    set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }
    get(prop) {
        const state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    }
    set(prop, value) {
        return this._state[prop] = value;
    }
    _clone(object) {
        return JSON.parse(JSON.stringify(object));
    }
};
AppState = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppState);
exports.AppState = AppState;
//# sourceMappingURL=app.service.js.map