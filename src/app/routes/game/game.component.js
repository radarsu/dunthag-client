"use strict";
const importer_1 = require("../../shared/importer");
let Game = class Game {
    constructor(toastr) {
        this.toastr = toastr;
        this.$playerVolume = 10;
        this.player = {
            setVolume: () => undefined,
            getVolume: () => 0,
        };
        this.music = 'wW4sBlfDvOE';
        this.console = console;
        this.character = {
            name: '',
            room: {
                name: '',
            },
            abilities: {},
        };
        this.abilitySchemes = [];
        this.chat = '';
        this.message = '';
        this.messageWidth = 300;
        this.abilities = {
            talk: {},
        };
    }
    get playerVolume() {
        return this.$playerVolume;
    }
    set playerVolume(value) {
        this.$playerVolume = value;
        this.player.setVolume(value);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hello `Game` component');
            let loadConfig = [];
            loadConfig.push(importer_1.Socket.socket.get('/character/self').then((item) => {
                console.log(item);
                this.character = item;
            }));
            loadConfig.push(importer_1.Socket.socket.get('/AbilityScheme').then((items) => {
                console.log(items);
                this.abilitySchemes = items;
            }));
            yield Promise.all(loadConfig);
            importer_1._.each(this.character.abilities, (ability) => {
                ability.abilityScheme = importer_1._.find(this.abilitySchemes, (abilityScheme) => {
                    return abilityScheme.id === ability.abilityScheme;
                });
            });
            importer_1.Socket.socket.on("message", (params) => {
                console.log(params);
                this.chat += `<span class="date">[${params.date}]</span> <span class="author">${params.character.name}</span>: ${params.message} <br/>`;
                this.scrollChatToBottom();
            });
            importer_1.Socket.socket.on("roll", (params) => {
                console.log(params);
                let rolls = `${params.roll.rolled}`;
                if (params.roll.rolled.length > 1) {
                    rolls += ` = ${params.roll.result}`;
                }
                this.chat += `<div class="message"><span class="date">[${params.date}]</span> <span class="author">${params.character.name}</span> rolled ${params.dice} [${rolls}]</div>`;
                this.scrollChatToBottom();
            });
        });
    }
    sendCommand() {
        let command = this.message.split(" ");
        let abilityCommandName = command.shift().substr(1);
        let abilityCommand = importer_1._.find(this.character.abilities, (ability) => {
            return ability.abilityScheme.code === abilityCommandName;
        });
        if (!abilityCommand) {
            this.toastr.error(`Nie dysponujesz taką komendą.`, `Wystapił błąd`);
            return;
        }
        importer_1.Socket.socket.post('/character/ability/', {
            ability: abilityCommand.id,
            params: {
                command: command,
            },
        }).then((response) => {
            this.message = '';
        });
    }
    sendMessage() {
        if (this.message.charAt(0) === "/") {
            this.sendCommand();
            this.message = '';
            return false;
        }
        let message = importer_1._.find(this.character.abilities, (ability) => {
            return ability.abilityScheme.code === "message";
        });
        importer_1.Socket.socket.post('/character/ability/', {
            ability: message.id,
            params: {
                message: this.message,
            },
        }).then((response) => {
            this.message = '';
        });
        return false;
    }
    scrollChatToBottom() {
    }
    savePlayer(player) {
        this.player = player;
        this.player.setVolume(this.playerVolume);
        player.loadVideoById('wW4sBlfDvOE');
    }
    onPlayerStateChange(event) {
    }
};
__decorate([
    importer_1.LocalStorage(),
    __metadata("design:type", Object)
], Game.prototype, "$playerVolume", void 0);
Game = __decorate([
    importer_1.Component({
        encapsulation: importer_1.ViewEncapsulation.None,
        selector: 'game',
        providers: [],
        styleUrls: ['./game.style.scss'],
        templateUrl: './game.template.html'
    }),
    __metadata("design:paramtypes", [importer_1.ToastsManager])
], Game);
exports.Game = Game;
//# sourceMappingURL=game.component.js.map