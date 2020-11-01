import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromiseComponent } from './promise.component';

const promiseRouterConfig: Routes = [
  { path: '', component: PromiseComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(promiseRouterConfig)
  ],
  exports: [RouterModule]
})
export class PromiseRoutingModule {}
