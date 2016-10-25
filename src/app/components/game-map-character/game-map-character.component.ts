import {
    Component, ElementRef, Input, Socket,
} from '../../shared/importer';

@Component({
    selector: 'game-map-character',  // <game-map-character></game-map-character>
    providers: [],
    host: {
        "[style.left.px]": "character.x * 64",
        "[style.top.px]": "character.y * 64",
        "[style.background-image]": "character.hasAvatar ? 'url(//shardgame.pl/server-assets/avatars/' + character.name + '.jpg?ts=" + new Date().getTime() + ")' : 'url(//shardgame.pl/assets/img/default-avatar.jpg)'",
    },
    styleUrls: ['./game-map-character.style.scss'],
    templateUrl: './game-map-character.template.html'
})
export class GameMapCharacter {

    private $character: any = {};
    get character() {
        return this.$character;
    }
    @Input()
    set character(value) {
        this.$character = value;
    }

    constructor(private el: ElementRef) {

    }

    ngOnInit() {
        console.log('hello `GameMapCharacter` component');
        if (this.character.hasAvatar) {
            this.el.nativeElement.style.backgroundImage = `url(//shardgame.pl/server-assets/avatars/${this.character.name}.jpg?ts=${new Date().getTime()})`;
        }

        Socket.socket.on(`move/${this.character.id}`, (params) => {
            console.log(params);
            this.character.x = params.x;
            this.character.y = params.y;
        });
    }

    private backgroundImage() {
        return `url(//shardgame.pl/server-assets/avatars/${this.character.name}.jpg)`;
    }
}
