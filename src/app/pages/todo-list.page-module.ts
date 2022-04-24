import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoListPage } from './todo-list.page';
import { TodoListComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/todo-list.component-module';
import { FirebaseTodoAppServiceModule } from '../../../projects/home/src/lib/adapters/secondary/infrastructure/firebase-todo-app.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TodoListPage,
        }
      ]),
  TodoListComponentModule,
  FirebaseTodoAppServiceModule
],
  	declarations: [TodoListPage],
  	providers: [],
  	exports: [] })
export class TodoListPageModule {
}
