import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LablecComponent } from './lablec/lablec.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { InfoComponent } from './info/info.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './admin/registration.component';
import { UgyfelszolgalatComponent } from './ugyfelszolgalat/ugyfelszolgalat.component';
import { KosarComponent } from './kosar/kosar.component';
import { TermekekComponent } from './termekek/termekek.component';
import { VasarlasComponent } from './kosar/vasarlas.component';
import { ProfilComponent } from './profil/profil.component';
import { WebfejlesztesComponent } from './webfejlesztes/webfejlesztes.component';
import { ForditasComponent } from './forditas/forditas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LablecComponent,
    KezdolapComponent,
    KapcsolatComponent,
    InfoComponent,
    AdminComponent,
    RegistrationComponent,
    UgyfelszolgalatComponent,
    KosarComponent,
    TermekekComponent,
    VasarlasComponent,
    ProfilComponent,
    WebfejlesztesComponent,
    ForditasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
