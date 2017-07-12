import { About } from './../pages/about/about';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {

  @ViewChild(Nav) nav: Nav;
  pages: [{title: string, component: any}]
  rootPage:any = HomePage;

  constructor(
    public menuCtrl: MenuController,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    
    this.pages = [
      {title: "Home Page", component: HomePage},
      {title: "About Page", component: About}
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit(){
    this.menuCtrl.open('menu1');
  }

  openPage(page: {title: string, component: any}){
    this.nav.setRoot(page.component);
    //ou this.rootPage = page.component
  }

  onOpen(){
    console.log("menu aberto")
  }

  onClose(){
    console.log("menu fechado")
  }

  onDrag(){
    console.log("menu arrastado")
  }
}

