"use strict";
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
let Title = class Title {
    constructor(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    getData() {
        console.log('Title#getData(): Get Data');
        return {
            value: 'AngularClass'
        };
    }
};
Title = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Title);
exports.Title = Title;
//# sourceMappingURL=title.service.js.map