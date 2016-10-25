import {
    ActivatedRoute, Component, Router, Socket, Background,
} from '../../shared/importer';

@Component({
    selector: 'user-view',  // <user-view></user-view>
    providers: [],
    styleUrls: ['./user-view.style.scss'],
    templateUrl: './user-view.template.html'
})
export class UserView {

    private user = {
        characters: []
    };

    constructor(private route: ActivatedRoute, private router: Router, private background: Background) {

    }

    private ngOnInit() {
        console.log('hello `UserView` component');

        this.background.setStyle({
            img: `url(/assets/img/bg-tiled-3.jpg)`,
            size: `auto`,
            repeat: `repeat`,
        });

        Socket.socket.get('/user/self').then((response: any) => {
            console.log(response);
            this.user = response;
        });
    }

    private characterCreate() {
        this.route.params.subscribe((params: any) => {
            this.router.navigate([`/user/${params.login}/character-create`]);
        });
    }

    private login(character) {
        console.log(character);
        Socket.socket.post('/character/login', {
            character: character.id,
        });
    }
}
