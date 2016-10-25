"use strict";
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/http");
const testing_2 = require("@angular/http/testing");
const app_service_1 = require("../app.service");
const home_component_1 = require("./home.component");
const title_1 = require("./title");
describe('Home', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({
        providers: [
            http_1.BaseRequestOptions,
            testing_2.MockBackend,
            {
                provide: http_1.Http,
                useFactory: function (backend, defaultOptions) {
                    return new http_1.Http(backend, defaultOptions);
                },
                deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
            },
            app_service_1.AppState,
            title_1.Title,
            home_component_1.Home
        ]
    }));
    it('should have default data', testing_1.inject([home_component_1.Home], (home) => {
        expect(home.localState).toEqual({ value: '' });
    }));
    it('should have a title', testing_1.inject([home_component_1.Home], (home) => {
        expect(!!home.title).toEqual(true);
    }));
    it('should log ngOnInit', testing_1.inject([home_component_1.Home], (home) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        home.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=home.spec.js.map