import { InjectionToken } from '@angular/core';
import { ListDTO } from './list.dto';

export const ADDS_LIST_DTO = new InjectionToken<AddsListDtoPort>('ADDS_LIST_DTO');

export interface AddsListDtoPort {
  add(list: Partial<ListDTO>): void;
}
