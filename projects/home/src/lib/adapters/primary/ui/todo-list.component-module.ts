import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TodoListComponent],
  	providers: [],
  	exports: [TodoListComponent] })
export class TodoListComponentModule {
}
