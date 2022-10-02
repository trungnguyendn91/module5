import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  category: Category[] = [];
  productF: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

    });
    this.productService.getAllCategory().subscribe(data => {
      this.category = data;
    });
  }
  updateForm() {
    this.productForm = new FormGroup({
        id: new FormControl(this.productF.id),
        name: new FormControl(this.productF.name),
        price: new FormControl(this.productF.price),
        description: new FormControl(this.productF.description),
        category: new FormControl(this.productF.category.name),
      }
    );
  }
  getOldProduct() {
    this.productService.findById(this.id).subscribe(data => {
      this.productF = data;

    }, error => {

    }, () => {
      this.updateForm();
    });
  }
  ngOnInit() {
    this.getOldProduct();
  }

  submit(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/');
    }, e => {
      console.log(e);
    });
  }
}
