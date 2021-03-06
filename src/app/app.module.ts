import { PromiseRoutingModule } from './promise/promise.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    PromiseRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
