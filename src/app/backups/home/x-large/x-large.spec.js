"use strict";
const testing_1 = require("@angular/core/testing");
const core_1 = require("@angular/core");
const by_1 = require("@angular/platform-browser/src/dom/debug/by");
const x_large_directive_1 = require("./x-large.directive");
describe('x-large directive', () => {
    let TestComponent = class TestComponent {
    };
    TestComponent = __decorate([
        core_1.Component({
            template: '<div x-large>Content</div>'
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                x_large_directive_1.XLarge,
                TestComponent
            ]
        });
    });
    it('should sent font-size to x-large', testing_1.fakeAsync(() => {
        testing_1.TestBed.compileComponents().then(() => {
            const fixture = testing_1.TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            testing_1.tick();
            const element = fixture.debugElement.query(by_1.By.css('div'));
            expect(element.nativeElement.style.fontSize).toBe('x-large');
        });
    }));
});
//# sourceMappingURL=x-large.spec.js.map