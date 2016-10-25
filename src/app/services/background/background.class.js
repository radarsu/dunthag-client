"use strict";
const importer_1 = require("../../shared/importer");
let Background = class Background {
    constructor() {
        this.$style = new importer_1.Subject();
        this.style$ = this.style.asObservable();
    }
    get style() {
        return this.$style;
    }
    set style(value) {
        this.$style = value;
    }
    setStyle(value) {
        this.style.next(value);
    }
};
Background = __decorate([
    importer_1.Injectable(),
    __metadata("design:paramtypes", [])
], Background);
exports.Background = Background;
//# sourceMappingURL=background.class.js.map