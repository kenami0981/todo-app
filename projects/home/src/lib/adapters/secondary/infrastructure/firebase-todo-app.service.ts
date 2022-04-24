import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllListDtoPort } from '../../../application/ports/secondary/gets-all-list.dto-port';
import { ListDTO } from '../../../application/ports/secondary/list.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseTodoAppService implements GetsAllListDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<ListDTO>): Observable<ListDTO[]> {
    return this._client.collection<ListDTO>('todo-list').valueChanges(({idField: 'id'})).pipe(map((data: ListDTO[]) => filterByCriterion(data, criterion)));
  }
}
