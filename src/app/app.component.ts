/*
 * Angular 2 decorators and services
 */
import {
    AppState, Component, Router, ViewEncapsulation, Background, LocalStorageService,
} from './shared/importer';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'body',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        // '../assets/css/materialize-src/sass/materialize.scss',
        '../assets/css/mdl-src/material-design-lite.scss',
        './app.style.scss'
    ],
    templateUrl: './app.template.html',
    providers: [LocalStorageService],
    host: {
        "[style.background-image]": "bgStyle.img",
        "[style.background-size]": "bgStyle.size",
        "[style.background-repeat]": "bgStyle.repeat",
    },
})
export class AppComponent {
    private bgStyle = {
        img: 'url(/assets/img/bg-full.jpg)',
        size: 'cover',
        repeat: 'no-repeat',
    };

    constructor(public appState: AppState, private router: Router, private storageService: LocalStorageService, private background: Background) {
        background.style$.subscribe(value => {
            this.bgStyle = value;
        });
    }

    ngOnInit() {
        this.background.style$.subscribe(value => {
            this.bgStyle = value;
        });

        console.log('Initial App State');
        // this.router.navigate(['']);
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
