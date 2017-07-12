import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Menu } from "ionic-angular/components/app/menu-interface";

/**
 * Generated class for the MenuSettings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu-settings',
  templateUrl: 'menu-settings.html',
})
export class MenuSettings {

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuSettings');
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'menu3')
    this.menuCtrl.enable(true, 'menu2').open();
    //this.menuCtrl.toggle('menu3');
  }

  toggleMenu1Enable(){
    let isEnable: boolean = this.menuCtrl.isEnabled('menu1');
    this.menuCtrl.enable(!isEnable, 'menu1');
  }

  menuConfigs(){
    //console.log(this.menuCtrl.getMenus());
    let menus: Menu[];
    menus = this.menuCtrl.getMenus();

    menus.forEach((currentMenu: Menu, index: number, array: Menu[])=>{
      currentMenu.enable(false)
    });

    this.menuCtrl.get('menu3').enable(true).open().then((open: boolean)=>{
      console.log("Menu 3 aberto")
    });
  }
}
