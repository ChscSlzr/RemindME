import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadeditPage } from './readedit.page';

const routes: Routes = [
  {
    path: '',
    component: ReadeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadeditPageRoutingModule {}
