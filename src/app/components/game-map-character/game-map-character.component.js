"use strict";
const importer_1 = require("../../shared/importer");
let GameMapCharacter = class GameMapCharacter {
    constructor(el) {
        this.el = el;
        this.$character = {};
    }
    get character() {
        return this.$character;
    }
    set character(value) {
        this.$character = value;
    }
    ngOnInit() {
        console.log('hello `GameMapCharacter` component');
        if (this.character.hasAvatar) {
            this.el.nativeElement.style.backgroundImage = `url(//shardgame.pl/server-assets/avatars/${this.character.name}.jpg?ts=${new Date().getTime()})`;
        }
        importer_1.Socket.socket.on(`move/${this.character.id}`, (params) => {
            console.log(params);
            this.character.x = params.x;
            this.character.y = params.y;
        });
    }
    backgroundImage() {
        return `url(//shardgame.pl/server-assets/avatars/${this.character.name}.jpg)`;
    }
};
GameMapCharacter = __decorate([
    importer_1.Component({
        selector: 'game-map-character',
        providers: [],
        host: {
            "[style.left.px]": "character.x * 64",
            "[style.top.px]": "character.y * 64",
            "[style.background-image]": "character.hasAvatar ? 'url(//shardgame.pl/server-assets/avatars/' + character.name + '.jpg?ts=" + new Date().getTime() + ")' : 'url(//shardgame.pl/assets/img/default-avatar.jpg)'",
        },
        styleUrls: ['./game-map-character.style.scss'],
        templateUrl: './game-map-character.template.html'
    }),
    __metadata("design:paramtypes", [importer_1.ElementRef])
], GameMapCharacter);
exports.GameMapCharacter = GameMapCharacter;
//# sourceMappingURL=game-map-character.component.js.map