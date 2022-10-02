import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoNewComponent} from './todo/todo/todo-new/todo-new.component';
import {TodoUpdateComponent} from './todo/todo/todo-update/todo-update.component';


const routes: Routes = [
  {
    path: 'todo',
    component: TodoNewComponent
  },
  {
    path: 'todo/edit/:id',
    component: TodoUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
