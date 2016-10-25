"use strict";
const importer_1 = require("./shared/importer");
const importer_2 = require("./shared/importer");
const APP_PROVIDERS = [
    ...importer_2.APP_RESOLVER_PROVIDERS,
    importer_2.AppState,
    importer_2.Background,
    importer_2.SocketConnected,
];
let AppModule = class AppModule {
    constructor(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    hmrOnInit(store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        this.appState._state = store.state;
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }
    hmrOnDestroy(store) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        const state = this.appState._state;
        store.state = state;
        store.disposeOldHosts = importer_1.createNewHosts(cmpLocation);
        store.restoreInputValues = importer_1.createInputTransfer();
        importer_1.removeNgStyles();
    }
    hmrAfterDestroy(store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
};
AppModule = __decorate([
    importer_1.NgModule({
        bootstrap: [importer_2.AppComponent],
        declarations: [
            importer_2.AppComponent,
            importer_2.Connect,
            importer_2.Login,
            importer_2.UserView,
            importer_2.CharacterCreate,
            importer_2.CharacterView,
            importer_2.Game,
            importer_2.ErrorView,
            importer_2.NoContent,
            importer_2.MDL,
            importer_2.VersionFooter,
            importer_2.CenteredPanel,
            importer_2.FullPanel,
            importer_2.FullHeightPanel,
            importer_2.ChatWindow,
            importer_2.ChatMessage,
            importer_2.ChatMessageSend,
            importer_2.GameMap,
            importer_2.GameMapCharacter,
        ],
        imports: [
            importer_1.BrowserModule,
            importer_1.FormsModule,
            importer_1.HttpModule,
            importer_1.RouterModule.forRoot(importer_2.ROUTES, { useHash: false }),
            importer_2.ToastModule,
            importer_2.YoutubePlayerModule,
            importer_2.MdSliderModule,
        ],
        providers: [
            importer_2.ENV_PROVIDERS,
            APP_PROVIDERS,
        ]
    }),
    __metadata("design:paramtypes", [importer_1.ApplicationRef, importer_2.AppState])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map