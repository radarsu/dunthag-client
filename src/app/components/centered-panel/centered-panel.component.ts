import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'centered-panel',  // <centered-panel></centered-panel>
    providers: [],
    styleUrls: ['./centered-panel.style.scss'],
    templateUrl: './centered-panel.template.html'
})
export class CenteredPanel {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `CenteredPanel` component');
    }
}
