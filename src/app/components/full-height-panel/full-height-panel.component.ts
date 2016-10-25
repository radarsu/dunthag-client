import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'full-height-panel',  // <full-height-panel></full-height-panel>
    providers: [],
    styleUrls: ['./full-height-panel.style.scss'],
    templateUrl: './full-height-panel.template.html'
})
export class FullHeightPanel {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `FullHeightPanel` component');
    }
}
