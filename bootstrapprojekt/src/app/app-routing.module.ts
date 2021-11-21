import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FejlecComponent } from './fejlec/fejlec.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { LablecComponent } from './lablec/lablec.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "kezdolap"},
  {path: "fejlec",component: FejlecComponent},
  {path: "kapcsolat",component: KapcsolatComponent},
  {path: "kezdolap",component: KezdolapComponent},
  {path: "lablec",component: LablecComponent},
  {path: "menu",component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
