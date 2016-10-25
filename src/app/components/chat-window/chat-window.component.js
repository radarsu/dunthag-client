"use strict";
const importer_1 = require("../../shared/importer");
let ChatWindow = class ChatWindow {
    constructor() {
    }
    ngOnInit() {
        console.log('hello `ChatWindow` component');
    }
};
ChatWindow = __decorate([
    importer_1.Component({
        selector: 'chat-window',
        providers: [],
        styleUrls: ['./chat-window.style.scss'],
        templateUrl: './chat-window.template.html'
    }),
    __metadata("design:paramtypes", [])
], ChatWindow);
exports.ChatWindow = ChatWindow;
//# sourceMappingURL=chat-window.component.js.map