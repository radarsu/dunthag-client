import {
    Directive, AfterViewInit
} from '@angular/core';

declare let componentHandler: any;
declare let getmdlSelect: any;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
        getmdlSelect.init('.getmdl-select');
    }
}
