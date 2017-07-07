import { Contct } from './../pages/contct/contct';
import { About } from './../pages/about/about';
import { MyTabs } from './../pages/my-tabs/my-tabs';
import { Capitalize } from './../pipes/capitalize';
import { Github } from './../providers/github';
import { BackgroundGreen } from './../components/background-green/background-green';
import { Dec } from './../components/dec/dec';
import { Dynamic } from './../pages/dynamic/dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    About,
    BackgroundGreen,
    Capitalize,
    Contct,
    Dynamic,
    MyApp,
    MyTabs,
    Dec,
    HomePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    About,
    Contct,
    Dynamic,
    MyApp,
    MyTabs,
    HomePage
  ],
  providers: [
    Github,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
