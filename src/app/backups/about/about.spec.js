"use strict";
const router_1 = require("@angular/router");
const testing_1 = require("@angular/core/testing");
const about_component_1 = require("./about.component");
describe('About', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({
        providers: [
            {
                provide: router_1.ActivatedRoute,
                useValue: {
                    data: {
                        subscribe: (fn) => fn({
                            yourData: 'yolo'
                        })
                    }
                }
            },
            about_component_1.About
        ]
    }));
    it('should log ngOnInit', testing_1.inject([about_component_1.About], (about) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        about.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=about.spec.js.map