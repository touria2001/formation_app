import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilComponentPage } from './profil-component.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilComponentPageRoutingModule {}
