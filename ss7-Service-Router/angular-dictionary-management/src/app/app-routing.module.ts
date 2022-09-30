import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary/dictionaty-detail/dictionaty-detail.component";
import {DictionayPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";



const routes: Routes = [{path:"",component:DictionayPageComponent},
  {path:"detail/:word",component:DictionaryDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
