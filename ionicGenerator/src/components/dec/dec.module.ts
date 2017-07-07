import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Dec } from './dec';

@NgModule({
  declarations: [
    Dec,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Dec
  ]
})
export class DecModule {}
