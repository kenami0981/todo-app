import { NgModule } from '@angular/core';
import { FirebaseTodoAppService } from './firebase-todo-app.service';
import { GETS_ALL_LIST_DTO } from '../../../application/ports/secondary/gets-all-list.dto-port';
import { ADDS_LIST_DTO } from '../../../application/ports/secondary/adds-list.dto-port';
import { REMOVES_LIST_DTO } from '../../../application/ports/secondary/removes-list.dto-port';
import { SETS_LIST_DTO } from '../../../application/ports/secondary/sets-list.dto-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [FirebaseTodoAppService, { provide: GETS_ALL_LIST_DTO, useExisting: FirebaseTodoAppService }, { provide: ADDS_LIST_DTO, useExisting: FirebaseTodoAppService }, { provide: REMOVES_LIST_DTO, useExisting: FirebaseTodoAppService }, { provide: SETS_LIST_DTO, useExisting: FirebaseTodoAppService }],
  	exports: [] })
export class FirebaseTodoAppServiceModule {
}
