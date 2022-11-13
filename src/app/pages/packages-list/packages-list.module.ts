import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagesListPageRoutingModule } from './packages-list-routing.module';

import { PackagesListPage } from './packages-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagesListPageRoutingModule
  ],
  declarations: [PackagesListPage]
})
export class PackagesListPageModule {}
