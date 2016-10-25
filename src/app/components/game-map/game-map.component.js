"use strict";
const importer_1 = require("../../shared/importer");
let GameMap = class GameMap {
    constructor() {
        this._ = importer_1._;
        this.slotSize = '64';
        this.character = {
            room: {},
        };
    }
    get onlineCharacters() {
        return importer_1._.filter(this.character.room.characters, (char) => {
            return char.online;
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hello `GameMap` component');
            yield importer_1.Socket.socket.get(`/character/self`).then((item) => {
                console.log(item);
                this.character = item;
            });
            importer_1.Socket.socket.on(`look`, (params) => {
                console.log(params.room);
                this.character.room = params.room;
                let myIndex = importer_1._.findIndex(params.room.characters, (character) => {
                    console.log(character.id, this.character.id);
                    return character.id === this.character.id;
                });
                params.room.characters[myIndex] = this.character;
            });
        });
    }
};
GameMap = __decorate([
    importer_1.Component({
        selector: 'game-map',
        providers: [],
        styleUrls: ['./game-map.style.scss'],
        templateUrl: './game-map.template.html'
    }),
    __metadata("design:paramtypes", [])
], GameMap);
exports.GameMap = GameMap;
//# sourceMappingURL=game-map.component.js.map