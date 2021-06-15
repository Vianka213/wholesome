import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyGoalsPageRoutingModule } from './my-goals-routing.module';

import { MyGoalsPage } from './my-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyGoalsPageRoutingModule
  ],
  declarations: [MyGoalsPage]
})
export class MyGoalsPageModule {}
