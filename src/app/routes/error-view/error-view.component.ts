import {
    Component,
} from '../../shared/importer';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'error-view',  // <connect></connect>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./error-view.style.scss'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './error-view.template.html'
})
export class ErrorView {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `ErrorView` component');
        // this.title.getData().subscribe(data => this.data = data);
    }
}
