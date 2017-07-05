import { LifecycleEvents } from './../lifecycle-events/lifecycle-events';
import { Contacts } from './../contacts/contacts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void{
    this.navCtrl.push(Contacts, {type: 'push'});
  }

  setRoot(): void{
    this.navCtrl.setRoot(Contacts, {type: 'setRoot'});
  }

  lifecycle(): void{
    this.navCtrl.push(LifecycleEvents)
      .then((authorizedAccess: boolean) => {

        if(authorizedAccess) {
          console.log('Page Pushed');
        }else{
          console.log('Access Denied')
        }
      }).catch(error => {
        console.log('Mensagem de erro', error);
      })
    }
}
