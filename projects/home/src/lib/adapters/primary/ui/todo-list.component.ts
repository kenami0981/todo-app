import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListDTO } from '../../../application/ports/secondary/list.dto';
import { GETS_ALL_LIST_DTO, GetsAllListDtoPort } from '../../../application/ports/secondary/gets-all-list.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_LIST_DTO, AddsListDtoPort } from '../../../application/ports/secondary/adds-list.dto-port';
import { map } from 'rxjs/operators';
@Component({ selector: 'lib-todo-list', templateUrl: './todo-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TodoListComponent {
  
  
  list$: Observable<ListDTO[]> = this._getsAllListDto.getAll().pipe(map((list: ListDTO[]) =>
      list.sort((a,b) => a.order - b.order))
  );
  readonly addTask: FormGroup = new FormGroup
  ({
    name: new FormControl()
  });
  order = 1;
  constructor(@Inject(GETS_ALL_LIST_DTO) private _getsAllListDto: GetsAllListDtoPort, @Inject(ADDS_LIST_DTO) private _addsListDto: AddsListDtoPort) {
  }


  onAddTaskSubmited(addTask: FormGroup): void {
    
    
    
    this._addsListDto.add({
      name: addTask.get('name')?.value,
      class: "unchecked",
      attribute: "",
      order: this.order,
    });
    this.addTask.reset();
  }
  orderUp() {
    this.order = this.order + 1;
    console.log(this.order);
    this.show()
  }
  show() {
    var x = document.getElementById("newTask")!;
    if (x?.style.display==='none') 
    {x.style.display='block';}
else {x.style.display='none'}
  }
}
