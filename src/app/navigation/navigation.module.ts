import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, NotFoundComponent]
})
export class NavigationModule { }
