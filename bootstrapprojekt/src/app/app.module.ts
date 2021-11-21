import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { MenuComponent } from './menu/menu.component';
import { LablecComponent } from './lablec/lablec.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    MenuComponent,
    LablecComponent,
    KezdolapComponent,
    KapcsolatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
