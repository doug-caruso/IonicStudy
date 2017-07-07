import { Github } from './../../providers/github';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Dynamic page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
  providers: [Github]
})
export class Dynamic {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public githubService: Github) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dynamic');

    this.githubService.getUsers()
      .subscribe((users: [{}]) => {
        console.log(users);
      })
  }

  onIncrement(){
    console.log(this.githubService.increment());
  }

}
