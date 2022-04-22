import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilComponentPageRoutingModule } from './profil-component-routing.module';

import { ProfilComponentPage } from './profil-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilComponentPageRoutingModule
  ],
  declarations: [ProfilComponentPage]
})
export class ProfilComponentPageModule {}
