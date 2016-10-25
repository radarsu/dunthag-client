"use strict";
const testing_1 = require("@angular/core/testing");
const http_1 = require("@angular/http");
const testing_2 = require("@angular/http/testing");
const title_service_1 = require("./title.service");
describe('Title', () => {
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
            title_service_1.Title
        ]
    }));
    it('should have http', testing_1.inject([title_service_1.Title], (title) => {
        expect(!!title.http).toEqual(true);
    }));
    it('should get data from the server', testing_1.inject([title_service_1.Title], (title) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        title.getData();
        expect(console.log).toHaveBeenCalled();
        expect(title.getData()).toEqual({ value: 'AngularClass' });
    }));
});
//# sourceMappingURL=title.spec.js.map