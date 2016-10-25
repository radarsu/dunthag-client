"use strict";
const core_1 = require("@angular/core");
let Detail = class Detail {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `Detail` component');
    }
};
Detail = __decorate([
    core_1.Component({
        selector: 'detail',
        template: `
    <h1>Hello from Detail</h1>
    <router-outlet></router-outlet>
  `
    }),
    __metadata("design:paramtypes", [])
], Detail);
exports.Detail = Detail;
//# sourceMappingURL=detail.component.js.map