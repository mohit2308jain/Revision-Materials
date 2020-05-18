import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service";
import { Book } from "../book";

@Component({
  selector: 'app-tablesearch',
  templateUrl: './tablesearch.component.html',
  styleUrls: ['./tablesearch.component.css']
})
export class TablesearchComponent implements OnInit {
  id: string = null;
  year: string = null;
  title: string = null;
  author: string = null;

  books: Book[] = [];
  

  constructor(private bookservice: BookService) {
    this.ss();
  }
  

  ngOnInit() {
    this.bookservice.getJSON().subscribe(data => {
      this.books = data;
      console.log("aaaaaaaaa");
      console.log(this.books);
    });
    console.log("klll");
    console.log(this.books);
  }
  ss(){
    console.log("kl");
    console.log(this.books);
  }

  sortBySal = () => { 
    console.log("llll");
    console.log(this.books);
    this.books = this.books.sort(function(a,b){
      let n1 = a.year;
      let n2 = b.year;
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }
  sortById = () => { 
    this.books = this.books.sort(function(a,b){
      let n1 = a.id;
      let n2 = b.id;
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }
  sortByName = () => { 
    this.books = this.books.sort(function(a,b){
      let n1 = a.author.toUpperCase();
      let n2 = b.author.toUpperCase();
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }

  sortByDept = () => { 
    this.books = this.books.sort(function(a,b){
      let n1 = a.title.toUpperCase();
      let n2 = b.title.toUpperCase();
      
      
      if(n1>n2) return 1;
      if(n1<n2) return -1
      return 0;
    })
  }
}
