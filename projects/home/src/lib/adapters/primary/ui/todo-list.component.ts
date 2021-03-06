import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ListDTO } from '../../../application/ports/secondary/list.dto';
import { GETS_ALL_LIST_DTO, GetsAllListDtoPort } from '../../../application/ports/secondary/gets-all-list.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import { ADDS_LIST_DTO, AddsListDtoPort } from '../../../application/ports/secondary/adds-list.dto-port';
import { map } from 'rxjs/operators';
import { REMOVES_LIST_DTO, RemovesListDtoPort } from '../../../application/ports/secondary/removes-list.dto-port';
import { SETS_LIST_DTO, SetsListDtoPort } from '../../../application/ports/secondary/sets-list.dto-port';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from '@angular/router';
export class DemoModalServiceStaticComponent {
  
}

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
  constructor(private modalService: BsModalService,@Inject(GETS_ALL_LIST_DTO) private _getsAllListDto: GetsAllListDtoPort, @Inject(ADDS_LIST_DTO) private _addsListDto: AddsListDtoPort, @Inject(REMOVES_LIST_DTO) private _removesListDto: RemovesListDtoPort, @Inject(SETS_LIST_DTO) private _setsListDto: SetsListDtoPort, private router: Router) {
  }

  HomeHref() {
    var url =this.router.url;
      if (url.length>11) {  
        this.router.navigate(['todo-app/home']);
      }
      else {
        this.router.navigate(['/home']);
      }}
  onAddTaskSubmited(addTask: FormGroup): void {
    
    
    
    this._addsListDto.add({
      name: addTask.get('name')?.value,
      class: "unchecked",
      attribute: "",
      order: Date.now(),
    });
    this.addTask.reset();
  }
  show() {
    var x = document.getElementById("input")!;
    var HomeButton = document.getElementById("HomeButton")!;
    if (x?.style.display==='none') 
    {x.style.display='block';}
else {x.style.display='none'}
  if (HomeButton?.style.display==='none') 
    {HomeButton.style.display='block';}
else {HomeButton.style.display='none'}
  }
  onDeleteTaskClicked(id: any): void {
    this._removesListDto.remove(id);
    
  }

  onCheckedClicked(ItemId: any,ItemClass: any): void {
    if (ItemClass=="unchecked") {
      this._setsListDto.set({
        id: ItemId,
        class: "checked"
      })}
    else { 
      this._setsListDto.set({
        id: ItemId,
        class: "unchecked"
    })

    }
  
  }
  onEditTask(ItemId: any,ItemName: any, ItemOrder: any,ItemClass:any): void {
    var place = document.getElementById(ItemId)!;
    place.innerHTML='<input id='+ItemOrder+' value="'+ItemName+'"></input><button id="'+ItemName+'" class="ml-2">Update</button>'
    var button = document.getElementById(ItemName)!;
    button.onclick=() => {
      var input = (<HTMLInputElement>document.getElementById(ItemOrder)).value
      var updated = (<HTMLInputElement>document.getElementById(ItemOrder)).value
      place.innerHTML='<label class="form-check-label fs-4" class='+ItemClass+' id='+ItemId+'>=> '+input

      this._setsListDto.set({
        id: ItemId,
        name: updated
      }
      
      )
    }
      
    
      
    
  
    
  }

  modalRef?: BsModalRef;
  message?: string;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-md" });
  }

  confirm(): void {
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
    
  }
}

