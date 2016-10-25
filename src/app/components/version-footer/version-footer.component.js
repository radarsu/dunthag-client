"use strict";
const importer_1 = require("../../shared/importer");
let VersionFooter = class VersionFooter {
    constructor() {
        this.version = '0.0.0';
    }
    ngOnInit() {
        console.log('hello `VersionFooter` component');
    }
};
VersionFooter = __decorate([
    importer_1.Component({
        selector: 'version-footer',
        providers: [],
        styleUrls: ['./version-footer.style.scss'],
        templateUrl: './version-footer.template.html'
    }),
    __metadata("design:paramtypes", [])
], VersionFooter);
exports.VersionFooter = VersionFooter;
//# sourceMappingURL=version-footer.component.js.map