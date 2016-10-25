import {
    Component,
} from '../../shared/importer';

@Component({
    selector: 'stat',  // <stat></stat>
    providers: [],
    styleUrls: ['./stat.style.scss'],
    templateUrl: './stat.template.html'
})
export class Stat {

    constructor() {

    }

    ngOnInit() {
        console.log('hello `Stat` component');
    }
}
