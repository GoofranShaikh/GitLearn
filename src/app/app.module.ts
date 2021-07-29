import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
