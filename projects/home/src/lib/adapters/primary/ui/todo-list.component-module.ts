import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, ModalModule.forRoot()],
  	declarations: [TodoListComponent],
  	providers: [],
  	exports: [TodoListComponent] })
export class TodoListComponentModule {
}
