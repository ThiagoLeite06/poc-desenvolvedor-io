import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromiseRoutingModule } from './promise.route';
import { PromiseComponent } from './promise.component';



@NgModule({
  declarations: [ PromiseComponent],
  imports: [
    CommonModule,
    PromiseRoutingModule
  ],
  exports: []
})
export class PromiseModule { }
