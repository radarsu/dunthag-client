"use strict";
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
let DataResolver = class DataResolver {
    constructor() {
    }
    resolve(route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    }
};
DataResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataResolver);
exports.DataResolver = DataResolver;
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map