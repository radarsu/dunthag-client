"use strict";
const core_1 = require("@angular/core");
let XLarge = class XLarge {
    constructor(element, renderer) {
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
};
XLarge = __decorate([
    core_1.Directive({
        selector: '[x-large]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], XLarge);
exports.XLarge = XLarge;
//# sourceMappingURL=x-large.directive.js.map