import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'example',  // <example></example>
    providers: [],
    styleUrls: ['./example.style.scss'],
    templateUrl: './example.template.html'
})
export class Example {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `Example` component');
    }
}
