import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = {};
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const  id = paramMap.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.product = this.productService.findById(parseInt(id));
      }
    });
  }

  ngOnInit(): void {
  }

}
