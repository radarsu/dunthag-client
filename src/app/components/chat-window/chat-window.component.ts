import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'chat-window',  // <chat-window></chat-window>
    providers: [],
    styleUrls: ['./chat-window.style.scss'],
    templateUrl: './chat-window.template.html'
})
export class ChatWindow {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `ChatWindow` component');
    }
}
