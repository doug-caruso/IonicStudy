import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire } from "angularfire2";
import { UserModel } from './../models/user.model'

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class User {

  constructor(
    public af: AngularFire,
    public http: Http) {
  }

  create(user: UserModel): firebase.Promise<void>{
    return this.af.database.list('/users').push(user);
  }

}
