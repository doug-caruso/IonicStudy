import { User } from './../../providers/user';
import { UserModel } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { Signup } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<UserModel[]>;

  constructor(
    public user: User,
    public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.users = this.user.users
  }

  onSignup(){
    this.navCtrl.push(Signup)
  }

  onChatCreate(userModel: UserModel){
    console.log('User: ', userModel);
    
  }

}
