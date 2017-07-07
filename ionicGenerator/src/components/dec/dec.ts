import { Component } from '@angular/core';

/**
 * Generated class for the Dec component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dec',
  templateUrl: 'dec.html'
})
export class Dec {

  text: string;

  constructor() {
    console.log('Hello Dec Component');
    this.text = 'Hello World';
  }

}
