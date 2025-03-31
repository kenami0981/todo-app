import { InjectionToken } from '@angular/core';
import { ListDTO } from './list.dto';

export const SETS_LIST_DTO = new InjectionToken<SetsListDtoPort>('SETS_LIST_DTO');

export interface SetsListDtoPort {
  set(list: Partial<ListDTO>): void;
}
