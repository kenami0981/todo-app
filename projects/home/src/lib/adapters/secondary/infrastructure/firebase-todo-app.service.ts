import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllListDtoPort } from '../../../application/ports/secondary/gets-all-list.dto-port';
import { ListDTO } from '../../../application/ports/secondary/list.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsListDtoPort } from '../../../application/ports/secondary/adds-list.dto-port';
import { RemovesListDtoPort } from '../../../application/ports/secondary/removes-list.dto-port';
import { SetsListDtoPort } from '../../../application/ports/secondary/sets-list.dto-port';

@Injectable()
export class FirebaseTodoAppService implements GetsAllListDtoPort, AddsListDtoPort, RemovesListDtoPort, SetsListDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<ListDTO>): Observable<ListDTO[]> {
    return this._client.collection<ListDTO>('todo-list').valueChanges(({idField: 'id'})).pipe(map((data: ListDTO[]) => filterByCriterion(data, criterion)));
  }

  add(list: Partial<ListDTO>): void {
    this._client.collection('todo-list').add(list);
  }

  remove(id: string): void {
    this._client.doc('todo-list/'+id).delete();
  }

  set(list: Partial<ListDTO>): void {
    this._client.doc('todo-list/'+list.id).update(list);
  }
}
