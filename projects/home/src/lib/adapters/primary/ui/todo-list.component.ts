import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListDTO } from '../../../application/ports/secondary/list.dto';
import { GETS_ALL_LIST_DTO, GetsAllListDtoPort } from '../../../application/ports/secondary/gets-all-list.dto-port';

@Component({ selector: 'lib-todo-list', templateUrl: './todo-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TodoListComponent {
  list$: Observable<ListDTO[]> = this._getsAllListDto.getAll();

  constructor(@Inject(GETS_ALL_LIST_DTO) private _getsAllListDto: GetsAllListDtoPort) {
  }
}
