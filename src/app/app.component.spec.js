"use strict";
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
const app_service_1 = require("./app.service");
describe('App', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({
        providers: [
            app_service_1.AppState,
            app_component_1.AppComponent
        ]
    }));
    it('should have a url', testing_1.inject([app_component_1.AppComponent], (app) => {
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));
});
//# sourceMappingURL=app.component.spec.js.map