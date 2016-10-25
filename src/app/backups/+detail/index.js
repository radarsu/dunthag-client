"use strict";
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const detail_component_1 = require("./detail.component");
console.log('`Detail` bundle loaded asynchronously');
exports.routes = [
    { path: '', component: detail_component_1.Detail, pathMatch: 'full' }
];
let AboutModule = class AboutModule {
};
AboutModule.routes = exports.routes;
AboutModule = __decorate([
    core_1.NgModule({
        declarations: [
            detail_component_1.Detail
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(exports.routes),
        ]
    }),
    __metadata("design:paramtypes", [])
], AboutModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutModule;
//# sourceMappingURL=index.js.map