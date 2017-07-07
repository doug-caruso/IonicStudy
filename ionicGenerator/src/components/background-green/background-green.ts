import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[backgroundGreen]' // Attribute selector
})
export class BackgroundGreen {

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
    console.log('Hello BackgroundGreen Directive');
  }

}
