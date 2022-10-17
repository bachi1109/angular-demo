import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
  component="";
  currentStudentId:String ="";

  ngOnInit(): void 
  {
    this.component = this.route.component!=null ?this.route.component.name:"test";
    this.route.params.subscribe(params =>{
      console.log(params['stid'])
      this.currentStudentId= params['stid'];
    } );
    console.log("url------> "+this.route.url)
  }

}
