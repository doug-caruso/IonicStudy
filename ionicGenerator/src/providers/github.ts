import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

/*
  Generated class for the Github provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Github {

  private count: number =0;

  constructor(public http: Http) {
    console.log('Hello Github Provider');
  }

  increment(): number{
    return ++this.count;
  }

  getUsers(): Observable<[{}]> {
    return this.http.get('https://api.github.com/users')
      .map((res: Response) => res.json() as [{}])
  }

}
