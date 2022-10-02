import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../../../model/customer/customer-type';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer-service/customer-type.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  });
  customerTypeList: CustomerType[] = [];


  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getALlCustomerType().subscribe(data => {
      console.log(data);
      this.customerTypeList = data;
    });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl(1)
    });
  }
  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      alert('Tạo thành công');
      this.router.navigateByUrl('/customer');
    }, e => {
      console.log(e);
    });
  }

}
