import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponentModule } from '@home';
import { HomePageModule } from './pages/home.page-module';
import { TodoListPageModule } from './pages/todo-list.page-module';

const routes: Routes = [
  { 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
      { 
        path: 'todo-list', 
        loadChildren: () => TodoListPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
