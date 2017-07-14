import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { UserModel } from './../models/user.model'

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class User {

  users: FirebaseListObservable<UserModel[]>

  constructor(
    public af: AngularFire,
    public http: Http
    ) {
      this.users = this.af.database.list('/users')
  }

  create(user: UserModel): any {
    return this.af.database.object(`/users/${user.uid}`)
    .set(user);
  }

}
