import { Auth } from './../../providers/auth';
import { FirebaseAuthState } from 'angularfire2';
import { UserModel } from './../../models/user.model';
import { User } from './../../providers/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  signupForm: FormGroup;

  constructor(
    public authService: Auth,
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: User
    ) {

      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      this.signupForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.compose([Validators.required, Validators.pattern(emailRegex)])]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
  }


  onSubmit(){

    let formUser = this.signupForm.value;

    this.authService.createAuthUser({
      email: formUser.email,
      password: formUser.password
    }).then((authState: FirebaseAuthState) =>{

      delete formUser.password;
      formUser.uid = authState.auth.uid;

      this.userService.create(formUser)
      .then(() => {
        console.log("Usuario cadastrado");
      })

    })
  }

}