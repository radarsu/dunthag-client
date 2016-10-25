import {
    Component, Socket,
} from '../../shared/importer';

@Component({
    selector: 'login',  // <login></login>
    providers: [],
    styleUrls: ['./login.style.scss'],
    templateUrl: './login.template.html'
})
export class Login {

    private user = {
        login: '',
        password: '',
    };

    constructor() {

    }

    ngOnInit() {
        console.log('hello `Login` component');
    }

    private login() {
        console.log(`login`);
        Socket.socket.post('/user/login', this.user);
    }

    private signup() {
        Socket.socket.post('/user/create', this.user);
    }
}
