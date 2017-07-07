import { Dynamic } from './../dynamic/dynamic';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myParameter: Function = () => {console.log('Pipe parameter')}

  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    this.navCtrl.push(Dynamic);
  }
}
