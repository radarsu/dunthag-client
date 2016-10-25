"use strict";
const importer_1 = require("../../shared/importer");
let ChatMessageSend = class ChatMessageSend {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `ChatMessageSend` component');
    }
};
ChatMessageSend = __decorate([
    importer_1.Component({
        selector: 'chat-message-send',
        providers: [],
        styleUrls: ['./chat-message-send.style.scss'],
        templateUrl: './chat-message-send.template.html'
    }),
    __metadata("design:paramtypes", [])
], ChatMessageSend);
exports.ChatMessageSend = ChatMessageSend;
//# sourceMappingURL=chat-message-send.component.js.map