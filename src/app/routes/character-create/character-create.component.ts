import {
    Component, Socket, _,
} from '../../shared/importer';

@Component({
    selector: 'character-create',  // <character-create></character-create>
    providers: [],
    styleUrls: ['./character-create.style.scss'],
    templateUrl: './character-create.template.html'
})
export class CharacterCreate {

    private races = [];
    private sexes = [];
    private statSchemes = [];
    private raceStats = [];
    private _ = _;

    private characterModel = {
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

    private get raceText(): string {
        let chosenRace = this.chosenRace;

        if (!chosenRace) {
            return;
        }

        return _.upperFirst(chosenRace.name);
    }

    private get chosenRace(): any {
        return _.find(this.races, (race) => {
            return race.code === this.characterModel.race;
        });
    }

    private get chosenRaceStats() {
        return {
            str: _.find(this.chosenRace.raceStats, (raceStat: any) => {
                return raceStat.statScheme.code === 'str' && raceStat.sex.code === this.characterModel.sex;
            }).value,
            agi: _.find(this.chosenRace.raceStats, (raceStat: any) => {
                return raceStat.statScheme.code === 'agi' && raceStat.sex.code === this.characterModel.sex;
            }).value,
            int: _.find(this.chosenRace.raceStats, (raceStat: any) => {
                return raceStat.statScheme.code === 'int' && raceStat.sex.code === this.characterModel.sex;
            }).value,
            free: _.find(this.chosenRace.raceStats, (raceStat: any) => {
                return raceStat.statScheme.code === 'free' && raceStat.sex.code === this.characterModel.sex;
            }).value,
        };
    }

    constructor() {

    }

    async ngOnInit() {
        console.log('hello `CharacterCreate` component');

        let loadConfig: Promise<any>[] = [];

        loadConfig.push(Socket.socket.get('/Race').then((items: any) => {
            this.races = items;
            this.characterModel.race = this.races[0].code;
        }));

        loadConfig.push(Socket.socket.get('/Sex').then((items: any) => {
            this.sexes = items;
            this.characterModel.sex = this.sexes[0].code;
        }));

        loadConfig.push(Socket.socket.get('/StatScheme').then((items: any) => {
            this.statSchemes = items;
        }));

        loadConfig.push(Socket.socket.get('/RaceStat').then((items: any) => {
            this.raceStats = items;
        }));

        await Promise.all(loadConfig);

        // populate races with raceStats
        _.each(this.races, (race) => {
            // two way references
            race.raceStats = _.filter(this.raceStats, (raceStat) => {
                return raceStat.race.id === race.id;
            });

            _.each(race.raceStats, (raceStatRef) => {
                raceStatRef.race = race;
            });
        });

        this.setRaceStats();
    }

    setRaceStats() {
        this.characterModel.stats = this.chosenRaceStats;
    }

    characterCreate() {
        Socket.socket.post('/character/create', this.characterModel);
    }

    chooseRace(code: string) {
        this.characterModel.race = _.find(this.races, (item) => {
            return item.code === code;
        }).code;

        this.setRaceStats();
        console.log(this.characterModel);
    }

    sexChange() {
        this.setRaceStats();
        console.log(this.characterModel);
    }

    increase(statCode: string) {
        if (this.characterModel.stats.free <= 0) {
            return;
        }

        --this.characterModel.stats.free;
        ++this.characterModel.stats[statCode];
    }

    decrease(statName: string) {
        if (this.characterModel.stats[statName] - 1 < this.chosenRaceStats[statName]) {
            return;
        }

        ++this.characterModel.stats.free;
        --this.characterModel.stats[statName];
    }
}
