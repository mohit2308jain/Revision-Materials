import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  id1:number=null;
  name:string="";
  salary:number=null;
  dept:string="";

  handle(){
    alert(this.id1 + " " + this.name + " " + this.salary + " " + this.dept);
  }
  title = '';
}
