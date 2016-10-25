"use strict";
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
console.log('`About` component loaded asynchronously');
let About = class About {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route
            .data
            .subscribe((data) => {
            this.localState = data.yourData;
        });
        console.log('hello `About` component');
    }
    asyncDataWithWebpack() {
    }
};
About = __decorate([
    core_1.Component({
        selector: 'about',
        styles: [`
  `],
        template: `
    <h1>About</h1>
    <div>
      For hot module reloading run
      <pre>npm run start:hmr</pre>
    </div>
    <div>
      <h3>
        patrick@AngularClass.com
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
  `
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], About);
exports.About = About;
//# sourceMappingURL=about.component.js.map