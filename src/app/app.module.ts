import {
    ApplicationRef, BrowserModule, FormsModule, HttpModule, NgModule, RouterModule, createNewHosts, createInputTransfer, removeNgStyles,
} from './shared/importer';
/*
 * Platform and Environment providers/directives/pipes
 */
import {
    APP_RESOLVER_PROVIDERS, AppComponent,
    AppState, SocketConnected, Background,
    InternalStateType, Connect, ENV_PROVIDERS, ErrorView, Login, MDL, NoContent, ROUTES,
    VersionFooter, CenteredPanel, FullPanel, UserView, CharacterCreate,
    ToastModule, MdSliderModule, YoutubePlayerModule,
    CharacterView, Game, FullHeightPanel,
    ChatWindow, ChatMessage, ChatMessageSend,
    GameMap, GameMapCharacter,
} from './shared/importer';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState,
    Background,
    SocketConnected,
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        // routes
        Connect,
        Login,
        UserView,
        CharacterCreate,
        CharacterView,
        Game,

        ErrorView,
        NoContent,

        // directives
        MDL,

        // sub-components
        VersionFooter,
        CenteredPanel,
        FullPanel,
        FullHeightPanel,

        ChatWindow,
        ChatMessage,
        ChatMessageSend,

        GameMap,
        GameMapCharacter,
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: false }),
        // custom modules
        ToastModule,
        YoutubePlayerModule,
        // angular2-material
        MdSliderModule,
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS,
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) { }

    hmrOnInit(store: StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
