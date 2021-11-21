import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArakComponent } from './arak/arak.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { SzolgaltatasokComponent } from './szolgaltatasok/szolgaltatasok.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "kezdolap"},
  {path: "kezdolap", component: KezdolapComponent},
  {path: "szolgaltatasok", component: SzolgaltatasokComponent},
  {path: "arak", component: ArakComponent},
  {path: "kapcsolat", component: KapcsolatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
