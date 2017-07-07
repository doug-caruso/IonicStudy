import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contct } from './contct';

@NgModule({
  declarations: [
    Contct,
  ],
  imports: [
    IonicPageModule.forChild(Contct),
  ],
  exports: [
    Contct
  ]
})
export class ContctModule {}
