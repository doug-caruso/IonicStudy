import { Component, Input } from '@angular/core';

/**
 * Generated class for the CustomHeader component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeader {

  @Input() title: string;

  constructor() {
  }

}
