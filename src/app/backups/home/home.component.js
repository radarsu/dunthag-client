"use strict";
const importer_1 = require("./shared/importer");
let Home = class Home {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `Home` component');
    }
};
Home = __decorate([
    importer_1.Component({
        selector: 'home',
        providers: [],
        styleUrls: ['./home.style.scss'],
        templateUrl: './home.template.html'
    }),
    __metadata("design:paramtypes", [])
], Home);
exports.Home = Home;
//# sourceMappingURL=home.component.js.map