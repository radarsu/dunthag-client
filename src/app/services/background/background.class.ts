import {
    Injectable, Subject,
} from '../../shared/importer';

export interface BackgroundStyle {
    img: string,
    size: string,
    repeat: string,
}

@Injectable()
export class Background {
    private $style = new Subject<BackgroundStyle>();

    public get style() {
        return this.$style;
    }
    public set style(value) {
        this.$style = value;
    }

    public style$ = this.style.asObservable();

    constructor() {
        //
    }

    public setStyle(value: BackgroundStyle) {
        this.style.next(value);
    }

}
