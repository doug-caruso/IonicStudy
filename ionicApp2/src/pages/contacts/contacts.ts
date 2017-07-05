import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Contacts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class Contacts {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ENTROOOU PELA PRIMEIRA VEZ");
    console.log(this.navParams.get('type'));
  }

  ionViewWillEnter() {
    console.log("ENTRAAANDO")
  }

  ionViewDidEnter(){
    console.log("ENTROOOU!")
  }
  
  pushPage(): void{
    this.navCtrl.push(Contacts);
  }

  popPage(): void{
    this.navCtrl.pop();
  }


}
