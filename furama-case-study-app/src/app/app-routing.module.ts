import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomListComponent} from './furama/facility/room-list/room-list.component';
import {HomeComponent} from './local-web/home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
  path: 'facility/list',
  component: RoomListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
