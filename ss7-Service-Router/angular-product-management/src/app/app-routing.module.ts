import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';

// Cấu hình routing cho ProductListComponent:
const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
},
  // khai báo thêm routes tương ứng với ProductCreateComponent:
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
