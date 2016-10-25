import {
    Component,
} from '../../shared/importer';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'version-footer',  // <version-footer></version-footer>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./version-footer.style.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './version-footer.template.html'
})
export class VersionFooter {

    private version = '0.0.0';

    constructor() {
        //
    }

    private ngOnInit() {
        console.log('hello `VersionFooter` component');
    }
}
