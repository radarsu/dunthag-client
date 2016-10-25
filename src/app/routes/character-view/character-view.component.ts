import {
    Component, Socket, ViewEncapsulation, _,
} from '../../shared/importer';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'character-view',  // <character-view></character-view>
    providers: [],
    styleUrls: ['./character-view.style.scss'],
    templateUrl: './character-view.template.html'
})
export class CharacterView {

    private characterModel = {
        name: '',
        stats: {
            str: {},
            agi: {},
            int: {}
        }
    };
    private avatarUrl = ``;

    private character: any = {};
    private statSchemes = [];

    constructor() {

    }

    async ngOnInit() {
        console.log('hello `CharacterView` component');

        let loadConfig: Promise<any>[] = [];

        loadConfig.push(Socket.socket.get('/character/self').then((items: any) => {
            console.log(`character`, items);
            this.character = items;
        }));

        loadConfig.push(Socket.socket.get('/StatScheme').then((items: any) => {
            this.statSchemes = items;
        }));

        await Promise.all(loadConfig);

        // populate character stats with statSchemes
        _.each(this.character.stats, (stat) => {
            stat.statScheme = _.find(this.statSchemes, (statScheme) => {
                return stat.statScheme === statScheme.id;
            });
        });

        this.character.stats = _.keyBy(this.character.stats, (stat) => {
            return stat.statScheme.code;
        });

        this.characterModel = this.character;
        this.avatarUrl = `//shardgame.pl/server-assets/avatars/${this.characterModel.name.toLowerCase()}.jpg?ts=${new Date().getTime()}`;
    }

    private onAvatarUpload(e) {
        Socket.socket.post("/character/upload-avatar", {
            avatar: e.target.files[0]
        }).then(() => {
            this.avatarUrl = `//shardgame.pl/server-assets/avatars/${this.characterModel.name.toLowerCase()}.jpg?ts=${new Date().getTime()}`;
        });
    }

    private enterGame() {
        Socket.socket.post("/character/enter-game");
    }
}
