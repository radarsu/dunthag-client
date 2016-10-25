"use strict";
const importer_1 = require("../../shared/importer");
let ErrorView = class ErrorView {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `ErrorView` component');
    }
};
ErrorView = __decorate([
    importer_1.Component({
        selector: 'error-view',
        providers: [],
        styleUrls: ['./error-view.style.scss'],
        templateUrl: './error-view.template.html'
    }),
    __metadata("design:paramtypes", [])
], ErrorView);
exports.ErrorView = ErrorView;
//# sourceMappingURL=error-view.component.js.map