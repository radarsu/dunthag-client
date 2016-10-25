import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'chat-message-send',  // <chat-message-send></chat-message-send>
    providers: [],
    styleUrls: ['./chat-message-send.style.scss'],
    templateUrl: './chat-message-send.template.html'
})
export class ChatMessageSend {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `ChatMessageSend` component');
    }
}
