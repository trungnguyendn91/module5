import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // khai báo một đối tượng products và một phương thức getAll() để lấy ra danh sách sản phẩm ở
  // ProductService vừa khai báo ở trên và gọi phương thức getAll() trong onInit
  products: Product[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.products = this.productService.getAll();
  }
}
