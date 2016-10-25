"use strict";
const importer_1 = require("../../shared/importer");
let ChatMessage = class ChatMessage {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `ChatMessage` component');
    }
};
ChatMessage = __decorate([
    importer_1.Component({
        selector: 'chat-message',
        providers: [],
        styleUrls: ['./chat-message.style.scss'],
        templateUrl: './chat-message.template.html'
    }),
    __metadata("design:paramtypes", [])
], ChatMessage);
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.component.js.map