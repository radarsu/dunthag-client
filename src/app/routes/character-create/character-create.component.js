"use strict";
const importer_1 = require("../../shared/importer");
let CharacterCreate = class CharacterCreate {
    constructor() {
        this.races = [];
        this.sexes = [];
        this.statSchemes = [];
        this.raceStats = [];
        this._ = importer_1._;
        this.characterModel = {
            name: '',
            sex: '',
            race: '',
            stats: {
                str: 0,
                agi: 0,
                int: 0,
                free: 0,
            },
        };
    }
    get raceText() {
        let chosenRace = this.chosenRace;
        if (!chosenRace) {
            return;
        }
        return importer_1._.upperFirst(chosenRace.name);
    }
    get chosenRace() {
        return importer_1._.find(this.races, (race) => {
            return race.code === this.characterModel.race;
        });
    }
    get chosenRaceStats() {
        return {
            str: importer_1._.find(this.chosenRace.raceStats, (raceStat) => {
                return raceStat.statScheme.code === 'str' && raceStat.sex.code === this.characterModel.sex;
            }).value,
            agi: importer_1._.find(this.chosenRace.raceStats, (raceStat) => {
                return raceStat.statScheme.code === 'agi' && raceStat.sex.code === this.characterModel.sex;
            }).value,
            int: importer_1._.find(this.chosenRace.raceStats, (raceStat) => {
                return raceStat.statScheme.code === 'int' && raceStat.sex.code === this.characterModel.sex;
            }).value,
            free: importer_1._.find(this.chosenRace.raceStats, (raceStat) => {
                return raceStat.statScheme.code === 'free' && raceStat.sex.code === this.characterModel.sex;
            }).value,
        };
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hello `CharacterCreate` component');
            let loadConfig = [];
            loadConfig.push(importer_1.Socket.socket.get('/Race').then((items) => {
                this.races = items;
                this.characterModel.race = this.races[0].code;
            }));
            loadConfig.push(importer_1.Socket.socket.get('/Sex').then((items) => {
                this.sexes = items;
                this.characterModel.sex = this.sexes[0].code;
            }));
            loadConfig.push(importer_1.Socket.socket.get('/StatScheme').then((items) => {
                this.statSchemes = items;
            }));
            loadConfig.push(importer_1.Socket.socket.get('/RaceStat').then((items) => {
                this.raceStats = items;
            }));
            yield Promise.all(loadConfig);
            importer_1._.each(this.races, (race) => {
                race.raceStats = importer_1._.filter(this.raceStats, (raceStat) => {
                    return raceStat.race.id === race.id;
                });
                importer_1._.each(race.raceStats, (raceStatRef) => {
                    raceStatRef.race = race;
                });
            });
            this.setRaceStats();
        });
    }
    setRaceStats() {
        this.characterModel.stats = this.chosenRaceStats;
    }
    characterCreate() {
        importer_1.Socket.socket.post('/character/create', this.characterModel);
    }
    chooseRace(code) {
        this.characterModel.race = importer_1._.find(this.races, (item) => {
            return item.code === code;
        }).code;
        this.setRaceStats();
        console.log(this.characterModel);
    }
    sexChange() {
        this.setRaceStats();
        console.log(this.characterModel);
    }
    increase(statCode) {
        if (this.characterModel.stats.free <= 0) {
            return;
        }
        --this.characterModel.stats.free;
        ++this.characterModel.stats[statCode];
    }
    decrease(statName) {
        if (this.characterModel.stats[statName] - 1 < this.chosenRaceStats[statName]) {
            return;
        }
        ++this.characterModel.stats.free;
        --this.characterModel.stats[statName];
    }
};
CharacterCreate = __decorate([
    importer_1.Component({
        selector: 'character-create',
        providers: [],
        styleUrls: ['./character-create.style.scss'],
        templateUrl: './character-create.template.html'
    }),
    __metadata("design:paramtypes", [])
], CharacterCreate);
exports.CharacterCreate = CharacterCreate;
//# sourceMappingURL=character-create.component.js.map