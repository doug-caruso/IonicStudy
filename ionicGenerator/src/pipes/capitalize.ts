import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Capitalize pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'capitalize',
})
export class Capitalize implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, onlyFirst: boolean, arg2: Function) {

    if(onlyFirst) return value.charAt(0).toUpperCase() + value.substr(1);
    arg2();
    let words: string[] = value.split(' ');
    let output: string = '';

    words.forEach((value:string, index: number, words: string[]) => {
      output += value.charAt(0).toUpperCase() + 
      value.substr(1).toLowerCase() + ' ';
    })
    return output;
  }
}
