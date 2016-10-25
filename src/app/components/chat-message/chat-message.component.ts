import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'chat-message',  // <chat-message></chat-message>
    providers: [],
    styleUrls: ['./chat-message.style.scss'],
    templateUrl: './chat-message.template.html'
})
export class ChatMessage {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `ChatMessage` component');
    }
}
