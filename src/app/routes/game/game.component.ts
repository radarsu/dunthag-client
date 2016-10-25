import {
    Component, LocalStorage, Socket, ToastsManager, ViewEncapsulation, _,
} from '../../shared/importer';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'game',  // <game></game>
    providers: [],
    styleUrls: ['./game.style.scss'],
    templateUrl: './game.template.html'
})
export class Game {
    @LocalStorage() private $playerVolume = 10;
    private get playerVolume() {
        return this.$playerVolume;
    }
    private set playerVolume(value) {
        this.$playerVolume = value;
        this.player.setVolume(value);
    }

    private player: any = {
        setVolume: () => undefined,
        getVolume: () => 0,
    };
    private music = 'wW4sBlfDvOE';
    private console: any = console;
    private character: any = {
        name: '',
        room: {
            name: '',
        },
        abilities: {},
    };
    private abilitySchemes: any[] = [];

    private chat: string = '';
    private message: string = '';
    private messageWidth: number = 300;
    private abilities: any = {
        talk: {},
    };

    constructor(private toastr: ToastsManager) {

    }

    async ngOnInit() {
        console.log('hello `Game` component');
        let loadConfig: Promise<any>[] = [];

        loadConfig.push(Socket.socket.get('/character/self').then((item: any) => {
            console.log(item);
            this.character = item;
        }));

        loadConfig.push(Socket.socket.get('/AbilityScheme').then((items: any) => {
            console.log(items);
            this.abilitySchemes = items;
        }));

        await Promise.all(loadConfig);

        // populate abilities with abilitySchemes
        _.each(this.character.abilities, (ability) => {
            // one way reference
            ability.abilityScheme = _.find(this.abilitySchemes, (abilityScheme) => {
                return abilityScheme.id === ability.abilityScheme;
            });
        });

        // listening on events
        Socket.socket.on("message", (params) => {
            console.log(params);
            this.chat += `<span class="date">[${params.date}]</span> <span class="author">${params.character.name}</span>: ${params.message} <br/>`;
            this.scrollChatToBottom();
        });

        Socket.socket.on("roll", (params) => {
            console.log(params);
            let rolls = `${params.roll.rolled}`;

            if (params.roll.rolled.length > 1) {
                rolls += ` = ${params.roll.result}`
            }

            this.chat += `<div class="message"><span class="date">[${params.date}]</span> <span class="author">${params.character.name}</span> rolled ${params.dice} [${rolls}]</div>`;
            this.scrollChatToBottom();
        });
    }

    private sendCommand() {
        let command = this.message.split(" ");

        // removing command name
        let abilityCommandName = command.shift().substr(1);

        // finding proper ability
        let abilityCommand = _.find(this.character.abilities, (ability) => {
            return ability.abilityScheme.code === abilityCommandName;
        });

        if (!abilityCommand) {
            this.toastr.error(`Nie dysponujesz taką komendą.`, `Wystapił błąd`);
            return;
        }

        Socket.socket.post('/character/ability/', {
            ability: abilityCommand.id,
            params: {
                command: command,
            },
        }).then((response) => {
            this.message = '';
        });
    }

    private sendMessage(): boolean {
        if (this.message.charAt(0) === "/") {
            this.sendCommand();
            this.message = '';
            return false;
        }

        let message = _.find(this.character.abilities, (ability) => {
            return ability.abilityScheme.code === "message";
        });

        Socket.socket.post('/character/ability/', {
            ability: message.id,
            params: {
                message: this.message,
            },
        }).then((response) => {
            this.message = '';
        });

        return false;
    }

    private scrollChatToBottom() {
        // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }

    private savePlayer(player) {
        this.player = player;
        this.player.setVolume(this.playerVolume);
        player.loadVideoById('wW4sBlfDvOE');
    }

    private onPlayerStateChange(event) {

    }
}
