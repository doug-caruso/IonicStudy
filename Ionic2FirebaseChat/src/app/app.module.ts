import { User } from './../providers/user';
import { Signup } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';

import {AngularFireModule ,FirebaseAppConfig } from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCq42gpxMYC-ymDKjO3i7Ju9F99Bccbp68",
  authDomain: "ionic2-firebase-chat-e29b4.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-e29b4.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-e29b4.appspot.com",
  messagingSenderId: "149184360993"  
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    User
  ]
})
export class AppModule {}
