import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';

import { IonicModule } from '@ionic/angular';

import { DiaryPageRoutingModule } from './diary-routing.module';

import { DiaryPage } from './diary.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DiaryPageRoutingModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [DiaryPage]
})
export class DiaryPageModule {}
