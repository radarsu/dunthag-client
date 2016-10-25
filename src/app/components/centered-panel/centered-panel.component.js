"use strict";
const importer_1 = require("../../shared/importer");
let CenteredPanel = class CenteredPanel {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `CenteredPanel` component');
    }
};
CenteredPanel = __decorate([
    importer_1.Component({
        selector: 'centered-panel',
        providers: [],
        styleUrls: ['./centered-panel.style.scss'],
        templateUrl: './centered-panel.template.html'
    }),
    __metadata("design:paramtypes", [])
], CenteredPanel);
exports.CenteredPanel = CenteredPanel;
//# sourceMappingURL=centered-panel.component.js.map