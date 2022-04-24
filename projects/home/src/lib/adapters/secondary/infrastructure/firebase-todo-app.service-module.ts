import { NgModule } from '@angular/core';
import { FirebaseTodoAppService } from './firebase-todo-app.service';
import { GETS_ALL_LIST_DTO } from '../../../application/ports/secondary/gets-all-list.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [FirebaseTodoAppService, { provide: GETS_ALL_LIST_DTO, useExisting: FirebaseTodoAppService }],
  	exports: [] })
export class FirebaseTodoAppServiceModule {
}
