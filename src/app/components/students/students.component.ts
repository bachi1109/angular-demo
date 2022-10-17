import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }
  students=
  [
    {name:"Vijay", stid:"08R15123"},
  {name:"Vijay1", stid:"08R15124"},
  {name:"Vijay2", stid:"08R15125"},
  {name:"Vijay3", stid:"08R15126"},
]

  ngOnInit(): void {
  }

}
