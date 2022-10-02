import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './local-web/navbar/navbar.component';
import { FooterComponent } from './local-web/footer/footer.component';
import { HomeComponent } from './local-web/home/home.component';
import { RoomListComponent } from './furama/facility/room-list/room-list.component';
import { CustomerListComponent } from './furama/customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './furama/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './furama/customer/edit-customer/edit-customer.component';
import { CreateFacilityComponent } from './furama/facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './furama/facility/edit-facility/edit-facility.component';
import { ContactListComponent } from './furama/contact/contact-list/contact-list.component';
import { FacilityContactComponent } from './furama/contact/facility-contact/facility-contact.component';
import { FacilityDetailComponent } from './furama/facility/facility-detail/facility-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RoomListComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    ContactListComponent,
    FacilityContactComponent,
    FacilityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
