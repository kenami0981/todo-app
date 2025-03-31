import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, ModalModule.forRoot(), RouterModule],
  	declarations: [TodoListComponent],
  	providers: [],
  	exports: [TodoListComponent] })
export class TodoListComponentModule {
}
