import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatedelete',
  templateUrl: './updatedelete.component.html',
  styleUrls: ['./updatedelete.component.css']
})
export class UpdatedeleteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  id1:number=null;
  name:string="";
  salary:number=null;
  dept:string="";
  title = 'Lab1';

  id2:number=null;
  name1:string="";
  salary1:number=null;
  dept1:string="";
  in:number=null;
  msg:string='';

  emp: any[] = [
    {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
    {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
    {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"}

  ]

  handle(){
    this.emp.push({empId:this.id1, empName:this.name, empSal:this.salary, empDep:this.dept});
    this.msg='DATA INSERTED';
  }

  delete = (e) =>{
    this.emp.splice(this.emp.indexOf(e),1);
    this.msg='DATA DELETED';
  }

  update = (e) =>{
    this.in = this.emp.indexOf(e);
    this.id2 = e.empId
    this.name1 = e.empName;
    this.salary1 = e.empSal;
    this.dept1 = e.empDep;
     
  }

  addupdate(){
    if(this.in!=null){
      this.emp.splice(this.in,1,{empId:this.id2, empName:this.name1, empSal:this.salary1, empDep:this.dept1});
      this.id2=null;
      this.name1='';
      this.salary1=null;
      this.dept1='';
      this.in=null;
      this.msg='DATA UPDATED';
    }
    
  }
}