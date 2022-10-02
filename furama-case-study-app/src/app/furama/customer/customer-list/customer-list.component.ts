import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer-service/customer.service';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  delete = [];
  idModal: number;
  nameModal: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customerList = data;
    });
  }

  elementDelete(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }


  resetModal() {
    this.delete = [];
  }

  deleteCustomer() {
    this.customerService.removeCustomer(this.idModal).subscribe(() => {
      alert ('Xóa thành công');
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }

}
