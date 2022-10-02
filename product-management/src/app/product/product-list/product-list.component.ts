import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idModal: number;
  nameModal: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data;
    });
  }

  productDelete(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.idModal).subscribe(() => {
      alert('Xóa thành công');
    }, error => {
    }, () => {
      this.ngOnInit();
    });
  }
}
