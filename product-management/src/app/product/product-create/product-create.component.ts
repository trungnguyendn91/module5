import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router) {
    this.productService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    });
  }

  ngOnInit() {
  }
  submit() {
    const product = this.productForm.value;
    this.productService.createProduct(product).subscribe(() => {
      this.productForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['/']);
    }, e => {
      console.log(e);
    });
  }

}
