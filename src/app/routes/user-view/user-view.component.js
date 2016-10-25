"use strict";
const importer_1 = require("../../shared/importer");
let UserView = class UserView {
    constructor(route, router, background) {
        this.route = route;
        this.router = router;
        this.background = background;
        this.user = {
            characters: []
        };
    }
    ngOnInit() {
        console.log('hello `UserView` component');
        this.background.setStyle({
            img: `url(/assets/img/bg-tiled-3.jpg)`,
            size: `auto`,
            repeat: `repeat`,
        });
        importer_1.Socket.socket.get('/user/self').then((response) => {
            console.log(response);
            this.user = response;
        });
    }
    characterCreate() {
        this.route.params.subscribe((params) => {
            this.router.navigate([`/user/${params.login}/character-create`]);
        });
    }
    login(character) {
        console.log(character);
        importer_1.Socket.socket.post('/character/login', {
            character: character.id,
        });
    }
};
UserView = __decorate([
    importer_1.Component({
        selector: 'user-view',
        providers: [],
        styleUrls: ['./user-view.style.scss'],
        templateUrl: './user-view.template.html'
    }),
    __metadata("design:paramtypes", [importer_1.ActivatedRoute, importer_1.Router, importer_1.Background])
], UserView);
exports.UserView = UserView;
//# sourceMappingURL=user-view.component.js.map