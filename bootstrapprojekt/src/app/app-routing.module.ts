import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './admin/registration.component';
import { InfoComponent } from './info/info.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { KosarComponent } from './kosar/kosar.component';
import { LablecComponent } from './lablec/lablec.component';
import { MenuComponent } from './menu/menu.component';
import { TermekekComponent } from './termekek/termekek.component';
import { UgyfelszolgalatComponent } from './ugyfelszolgalat/ugyfelszolgalat.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "kezdolap"},
  {path: "kapcsolat",component: KapcsolatComponent},
  {path: "kezdolap",component: KezdolapComponent},
  {path: "lablec",component: LablecComponent},
  {path: "menu",component: MenuComponent},
  {path: "info",component: InfoComponent},
  {path: "admin",component: AdminComponent},
  {path: "registration",component: RegistrationComponent},
  {path: "ugyfelszolgalat",component: UgyfelszolgalatComponent},
  {path: "kosar",component: KosarComponent},
  {path: "termekek",component: TermekekComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
