import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {


  constructor(private el:ElementRef) {
    el.nativeElement.style.cursor = 'pointer';
   }

}
