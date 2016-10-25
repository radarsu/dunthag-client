"use strict";
const importer_1 = require("../../shared/importer");
let Example = class Example {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `Example` component');
    }
};
Example = __decorate([
    importer_1.Component({
        selector: 'example',
        providers: [],
        styleUrls: ['./example.style.scss'],
        templateUrl: './example.template.html'
    }),
    __metadata("design:paramtypes", [])
], Example);
exports.Example = Example;
//# sourceMappingURL=example.component.js.map