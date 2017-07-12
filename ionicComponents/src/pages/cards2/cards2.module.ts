import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cards2 } from './cards2';

@NgModule({
  declarations: [
    Cards2,
  ],
  imports: [
    IonicPageModule.forChild(Cards2),
  ],
  exports: [
    Cards2
  ]
})
export class Cards2Module {}
