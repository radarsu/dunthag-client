"use strict";
const importer_1 = require("../../shared/importer");
let CharacterView = class CharacterView {
    constructor() {
        this.characterModel = {
            name: '',
            stats: {
                str: {},
                agi: {},
                int: {}
            }
        };
        this.avatarUrl = ``;
        this.character = {};
        this.statSchemes = [];
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hello `CharacterView` component');
            let loadConfig = [];
            loadConfig.push(importer_1.Socket.socket.get('/character/self').then((items) => {
                console.log(`character`, items);
                this.character = items;
            }));
            loadConfig.push(importer_1.Socket.socket.get('/StatScheme').then((items) => {
                this.statSchemes = items;
            }));
            yield Promise.all(loadConfig);
            importer_1._.each(this.character.stats, (stat) => {
                stat.statScheme = importer_1._.find(this.statSchemes, (statScheme) => {
                    return stat.statScheme === statScheme.id;
                });
            });
            this.character.stats = importer_1._.keyBy(this.character.stats, (stat) => {
                return stat.statScheme.code;
            });
            this.characterModel = this.character;
            this.avatarUrl = `//shardgame.pl/server-assets/avatars/${this.characterModel.name.toLowerCase()}.jpg?ts=${new Date().getTime()}`;
        });
    }
    onAvatarUpload(e) {
        importer_1.Socket.socket.post("/character/upload-avatar", {
            avatar: e.target.files[0]
        }).then(() => {
            this.avatarUrl = `//shardgame.pl/server-assets/avatars/${this.characterModel.name.toLowerCase()}.jpg?ts=${new Date().getTime()}`;
        });
    }
    enterGame() {
        importer_1.Socket.socket.post("/character/enter-game");
    }
};
CharacterView = __decorate([
    importer_1.Component({
        encapsulation: importer_1.ViewEncapsulation.None,
        selector: 'character-view',
        providers: [],
        styleUrls: ['./character-view.style.scss'],
        templateUrl: './character-view.template.html'
    }),
    __metadata("design:paramtypes", [])
], CharacterView);
exports.CharacterView = CharacterView;
//# sourceMappingURL=character-view.component.js.map