import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ListDTO } from './list.dto';

export const GETS_ALL_LIST_DTO = new InjectionToken<GetsAllListDtoPort>('GETS_ALL_LIST_DTO');

export interface GetsAllListDtoPort {
  getAll(criterion?: Partial<ListDTO>): Observable<ListDTO[]>;
}
