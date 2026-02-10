import { Directive } from "@angular/core";

@Directive({
    selector: 'ab-button, [ab-button]',
    exportAs: 'abButton',
})
export class ButtonDirective { 
    
}