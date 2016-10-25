"use strict";
const core_1 = require("@angular/core");
let MDL = class MDL {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
        getmdlSelect.init('.getmdl-select');
    }
};
MDL = __decorate([
    core_1.Directive({
        selector: '[mdl]'
    }),
    __metadata("design:paramtypes", [])
], MDL);
exports.MDL = MDL;
//# sourceMappingURL=mdl.directive.js.map