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
export class DemoModalServiceStaticComponent {
  
}

@Component({ selector: 'lib-todo-list', templateUrl: './todo-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TodoListComponent {
  ngOnInit() {
    today()
    function today() {
        var today = new Date()
        const x = document.getElementById("current-date");
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        var day = today.getDay()
        if (x!==null) {
            if (day==0) {
                day=7
                
            }
            x.innerHTML=(weekNames[day-1])?.substring(0,3)+" "+today.getDate()+" "+((monthNames[today.getMonth()])?.substring(0,3)).toUpperCase();
        }
      
}
}
  
  
  list$: Observable<ListDTO[]> = this._getsAllListDto.getAll().pipe(map((list: ListDTO[]) =>
      list.sort((a,b) => a.order - b.order))
  );
  readonly addTask: FormGroup = new FormGroup
  ({
    name: new FormControl()
  });
  order = 1;
  constructor(private modalService: BsModalService,@Inject(GETS_ALL_LIST_DTO) private _getsAllListDto: GetsAllListDtoPort, @Inject(ADDS_LIST_DTO) private _addsListDto: AddsListDtoPort, @Inject(REMOVES_LIST_DTO) private _removesListDto: RemovesListDtoPort, @Inject(SETS_LIST_DTO) private _setsListDto: SetsListDtoPort) {
  }


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
    var x = document.getElementById("newTask")!;
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
  addAttribute(id: any) {
    alert(id)

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
  onEditTask(ItemId: any,ItemName: any, ItemOrder: any): void {
    // document.getElementById(ItemId)!.innerHTML = "<textarea></textarea>";
    // document.getElementById(ItemOrder)!.innerHTML='<button>Submit</button>'
    // document.getElementById(ItemOrder)!.addEventListener('click', this.Submited);
    
    var NewTask = prompt("Edited task:")!;
    this._setsListDto.set({
      id: ItemId,
      name: NewTask
    
    })
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
