import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fullform',
  templateUrl: './fullform.component.html',
  styleUrls: ['./fullform.component.css']
})
export class FullformComponent implements OnInit {

  ugabugbuga;
  category: string[] = [
    'Electronics',
    'Grocery',
    'Mobile',
    'Cloth'
  ];
  checkedList = [];

  online:any[]=['Yes','No'];
  products:any[]=['BigBazar','D-Mart','Alliance','Mega Store'];
   userform: FormGroup; 

  constructor(){}
  ngOnInit(){
  }
  validate(userforms){
      console.log("Form Submitted!");
      
      // console.log(userforms.value);
      console.log(this.checkedList);
  }
  onCheckboxChange(option, event) {
    if(event.target.checked) {
      this.checkedList.push(option);
    } else {
    for(var i=0 ; i < this.products.length; i++) {
      if(this.checkedList[i] == option) {
        this.checkedList.splice(i,1);
     }
   }
 }
}
}
