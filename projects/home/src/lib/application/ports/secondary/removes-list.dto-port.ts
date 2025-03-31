import { InjectionToken } from '@angular/core';

export const REMOVES_LIST_DTO = new InjectionToken<RemovesListDtoPort>('REMOVES_LIST_DTO');

export interface RemovesListDtoPort {
  remove(id: string): void;
}
