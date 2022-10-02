import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../model/customer/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL_CUSTOMER);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL_CUSTOMER, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.URL_CUSTOMER + '/' + id);
  }

  editCustomer(id: number, customer): Observable<Customer> {
    return this.http.patch<Customer>(this.URL_CUSTOMER + '/' + id, customer);
  }

  removeCustomer(id: any): Observable<Customer> {
    return this.http.delete<Customer>(this.URL_CUSTOMER + '/' + id);
  }
}
