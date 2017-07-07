import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTabs } from './my-tabs';

@NgModule({
  declarations: [
    MyTabs,
  ],
  imports: [
    IonicPageModule.forChild(MyTabs),
  ]
})
export class MyTabsModule {}
