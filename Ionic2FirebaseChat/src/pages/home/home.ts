import { Signup } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onSignup(){
    this.navCtrl.push(Signup)
  }

}
