import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  emp: any[] = [
    {empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
    {empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
    {empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
    {empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
    {empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
    {empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
    {empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},
    {empId:1008,empName:'Neelima',empSal:81000,empDep:'TESTING',empjoiningdate:'6/17/2015'},
    {empId:1009,empName:'Daya',empSal:1000,empDep:'TESTING',empjoiningdate:'6/17/2016'} 
  ];

  sortBySal = () => { 
    this.emp = this.emp.sort(function(a,b){
      let n1 = a.empSal;
      let n2 = b.empSal;
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }
  sortById = () => { 
    this.emp = this.emp.sort(function(a,b){
      let n1 = a.empId;
      let n2 = b.empId;
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }
  sortByName = () => { 
    this.emp = this.emp.sort(function(a,b){
      let n1 = a.empName.toUpperCase();
      let n2 = b.empName.toUpperCase();
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }

  sortByDept = () => { 
    this.emp = this.emp.sort(function(a,b){
      let n1 = a.empDep.toUpperCase();
      let n2 = b.empDep.toUpperCase();
      
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }

  constructor() { }

  ngOnInit() {
  }

}