import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dynamic } from './dynamic';

@NgModule({
  declarations: [
    Dynamic,
  ],
  imports: [
    IonicPageModule.forChild(Dynamic),
  ],
  exports: [
    Dynamic
  ]
})
export class DynamicModule {}
