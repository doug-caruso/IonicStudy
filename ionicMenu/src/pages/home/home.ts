import { MenuSettings } from './../menu-settings/menu-settings';
import { About } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onAbout(){
    this.navCtrl.push(About);
  }
  onSettings(){
    this.navCtrl.push(MenuSettings);
  }

}
