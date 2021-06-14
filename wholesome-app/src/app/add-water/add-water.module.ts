import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWaterPageRoutingModule } from './add-water-routing.module';

import { AddWaterPage } from './add-water.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWaterPageRoutingModule
  ],
  declarations: [AddWaterPage]
})
export class AddWaterPageModule {}
