"use strict";
const importer_1 = require("./shared/importer");
let AppComponent = class AppComponent {
    constructor(appState, router, storageService, background) {
        this.appState = appState;
        this.router = router;
        this.storageService = storageService;
        this.background = background;
        this.bgStyle = {
            img: 'url(/assets/img/bg-full.jpg)',
            size: 'cover',
            repeat: 'no-repeat',
        };
        background.style$.subscribe(value => {
            this.bgStyle = value;
        });
    }
    ngOnInit() {
        this.background.style$.subscribe(value => {
            this.bgStyle = value;
        });
        console.log('Initial App State');
    }
};
AppComponent = __decorate([
    importer_1.Component({
        selector: 'body',
        encapsulation: importer_1.ViewEncapsulation.None,
        styleUrls: [
            '../assets/css/mdl-src/material-design-lite.scss',
            './app.style.scss'
        ],
        templateUrl: './app.template.html',
        providers: [importer_1.LocalStorageService],
        host: {
            "[style.background-image]": "bgStyle.img",
            "[style.background-size]": "bgStyle.size",
            "[style.background-repeat]": "bgStyle.repeat",
        },
    }),
    __metadata("design:paramtypes", [importer_1.AppState, importer_1.Router, importer_1.LocalStorageService, importer_1.Background])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map