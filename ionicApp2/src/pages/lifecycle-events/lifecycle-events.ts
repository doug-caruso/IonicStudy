import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEvents page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEvents {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifecycleEvents');
  }

  ionViewCanEnter(): Promise<any> {

    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos...');

      setTimeout(() => {
       let number = Math.round(Math.random() * 100);
       if(number % 2 == 0){
         resolve();
         console.log(`${number} - Autorizado!`)
       }else{
          reject();
          console.log(`${number} - Não Autorizado`)
       }
      }, 2000);
    })
  }

  ionViewCanLeave(): boolean{    
    return true;
  }

}
