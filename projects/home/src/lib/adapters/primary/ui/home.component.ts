import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({ selector: 'lib-home', templateUrl: './home.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class HomeComponent implements OnInit{
    ngOnInit() {
        today()
        function today() {
            var today = new Date()
            const x = document.getElementById("current-date");
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            const weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            if (x!==null) {
                x.innerHTML=(weekNames[today.getDay()-1]).substring(0,3)+" "+today.getDate()+" "+((monthNames[today.getMonth()]).substring(0,3)).toUpperCase();
            }
    }
    }}

