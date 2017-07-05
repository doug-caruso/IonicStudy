import { ConfigPage } from './../config-page/config-page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onPush(): void {
    this.navCtrl.push(ConfigPage)
  }

}
