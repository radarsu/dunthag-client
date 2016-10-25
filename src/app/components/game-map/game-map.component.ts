import {
    Component, Socket, _,
} from '../../shared/importer';

@Component({
    selector: 'game-map',  // <game-map></game-map>
    providers: [],
    styleUrls: ['./game-map.style.scss'],
    templateUrl: './game-map.template.html'
})
export class GameMap {

    private _ = _;
    private slotSize = '64';
    private character: any = {
        room: {},
    };
    private get onlineCharacters() {
        return _.filter(this.character.room.characters, (char) => {
            return char.online;
        });
    }

    constructor() {

    }

    async ngOnInit() {
        console.log('hello `GameMap` component');

        await Socket.socket.get(`/character/self`).then((item: any) => {
            console.log(item);
            this.character = item;
        });

        Socket.socket.on(`look`, (params) => {
            console.log(params.room);

            // two way binding
            this.character.room = params.room;

            let myIndex = _.findIndex(params.room.characters, (character) => {
                console.log(character.id, this.character.id);
                return character.id === this.character.id;
            });

            params.room.characters[myIndex] = this.character;
        });

    }
}
