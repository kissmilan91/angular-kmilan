import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { FormsModule } from '@angular/forms';
import { SzolgaltatasokComponent } from './szolgaltatasok/szolgaltatasok.component';
import { ArakComponent } from './arak/arak.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    KezdolapComponent,
    FejlecComponent,
    LablecComponent,
    SzolgaltatasokComponent,
    ArakComponent,
    KapcsolatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
