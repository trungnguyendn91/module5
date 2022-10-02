import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';
import {CustomerType} from '../../../model/customer/customer-type';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {CustomerTypeService} from '../../../service/customer-service/customer-type.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerF: Customer;
  customerTypeList: CustomerType[] = [];
  id: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

    });
    this.customerTypeService.getALlCustomerType().subscribe(data => {
      this.customerTypeList = data;
    });
  }
  updateForm() {
    this.customerForm = new FormGroup({
      id: new FormControl(this.customerF.id),
      name: new FormControl(this.customerF.name),
      dateOfBirth: new FormControl(this.customerF.dateOfBirth),
      gender: new FormControl(this.customerF.gender),
      idCard: new FormControl(this.customerF.idCard),
      phoneNumber: new FormControl(this.customerF.phoneNumber),
      email: new FormControl(this.customerF.email),
      address: new FormControl(this.customerF.address),
      }
    );
  }
  getOldCustomer() {
    this.customerService.findById(this.id).subscribe(data => {
      this.customerF = data;

    }, error => {

    }, () => {
      this.updateForm();
    });
  }
  ngOnInit() {
    this.getOldCustomer();
  }

  submit(id: number) {
    const customer = this.customerForm.value;
    this.customerService.editCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/customer');
    }, e => {
      console.log(e);
    });
  }
}
