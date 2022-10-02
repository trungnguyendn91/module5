import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomListComponent} from './furama/facility/room-list/room-list.component';
import {HomeComponent} from './local-web/home/home.component';
import {CustomerListComponent} from './furama/customer/customer-list/customer-list.component';
import {CreateCustomerComponent} from './furama/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './furama/customer/edit-customer/edit-customer.component';
import {CreateFacilityComponent} from './furama/facility/create-facility/create-facility.component';
import {EditFacilityComponent} from './furama/facility/edit-facility/edit-facility.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'customer',
    component: CustomerListComponent
  }, {
    path: 'customer/create',
    component: CreateCustomerComponent
  }, {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  }, {
    path: 'facility/list',
    component: RoomListComponent
  }, {
    path: 'facility/create',
    component: CreateFacilityComponent
  }, {
    path: 'facility/edit/:id',
    component: EditFacilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
