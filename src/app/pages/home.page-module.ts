import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/home.component-module';
import { TodoListComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/todo-list.component-module';
import { FirebaseTodoAppServiceModule } from '../../../projects/home/src/lib/adapters/secondary/infrastructure/firebase-todo-app.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  HomeComponentModule,
  TodoListComponentModule,
  FirebaseTodoAppServiceModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
