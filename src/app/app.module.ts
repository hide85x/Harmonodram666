import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpektaklComponent } from './nav/spektakl/spektakl.component';
import { AktorComponent } from './nav/aktor/aktor.component';
import { RepertuarComponent } from './nav/repertuar/repertuar.component';
import { SzukajComponent } from './header/szukaj/szukaj.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpektaklComponent,
    AktorComponent,
    RepertuarComponent,
    SzukajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
