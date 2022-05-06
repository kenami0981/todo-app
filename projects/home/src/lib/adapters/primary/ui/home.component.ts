import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { ADDS_LIST_DTO, AddsListDtoPort } from '../../../application/ports/secondary/adds-list.dto-port';
import { ListDTO } from '../../../application/ports/secondary/list.dto';
import { Observable } from 'rxjs';
import { GETS_ALL_LIST_DTO, GetsAllListDtoPort } from '../../../application/ports/secondary/gets-all-list.dto-port';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

var test = 1;
@Component({ selector: 'lib-home', templateUrl: './home.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class HomeComponent implements OnInit{
  readonly homeForm: FormGroup = new FormGroup
  ({
      name: new FormControl()
    });
  list$: Observable<ListDTO[]> = this._getsAllListDto.getAll();

    firstTask() {
        var box = document.getElementById("box")!;  
        var homeTask = document.getElementById("homeTask")!;
        homeTask.style.display="block"
        box.style.display='none'
    }
    TodoListHref() {
      window.location.href="/todo-list"
    }
    HomeHref() {
      window.location.href="/home"
    }
    
    ngOnInit() {
        today()
        eventListener()
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
    function enableButton(){
      var myButtonIWantToEnable = document.getElementById("change")!;
      myButtonIWantToEnable.innerHTML = '<button type="submit" id="HomeButton" class="myButton">Add Task</button>'
    }
    function eventListener() {
      var el = document.getElementById("TextFromTextarea")!;
     el.addEventListener("click", enableButton, false);
    }
    }

  constructor(@Inject(ADDS_LIST_DTO) private _addsListDto: AddsListDtoPort, @Inject(GETS_ALL_LIST_DTO) private _getsAllListDto: GetsAllListDtoPort, private _router: Router, private route: ActivatedRoute) {
  }

  onHomeAddTaskHomesubmited(homeForm: FormGroup): void {

    if (homeForm.get("name")?.value==null) {
      
    }
    else {
    this._addsListDto.add({
        name: homeForm.get('name')?.value,
        class: "unchecked",
        attribute: "",
        order: 0,
        });
        this.homeForm.reset();
        var url = this._router.url[0];
        alert(url)
        if (url=='/home') {
          url=''
        }
        
        this._router.navigate([url+'/todo-list']);
        
  }}
  
}

