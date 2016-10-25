import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'full-panel',  // <full-panel></full-panel>
    providers: [],
    styleUrls: ['./full-panel.style.scss'],
    templateUrl: './full-panel.template.html'
})
export class FullPanel {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `FullPanel` component');
    }
}
