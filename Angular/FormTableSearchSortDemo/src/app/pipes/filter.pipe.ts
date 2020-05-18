import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], name:string, id:string, author:string, year: string): Book[] {
    console.log(name);
    console.log(year);
    console.log(id);
    console.log(author);
    if(!books) return [];
    if(!name && !author && !year && !id) return books;

    if(id){
      id = id.toLocaleLowerCase();
      books = books.filter((book) => {
        return book.id.toString().toLocaleLowerCase().includes(id);
      })
    }

    if(name){
      name = name.toLocaleLowerCase();
      books = books.filter((book) => {
        return book.title.toLocaleLowerCase().includes(name);
      })
    }

    if(author){
      author = author.toLocaleLowerCase();
      books = books.filter((book) => {
        return book.author.toLocaleLowerCase().includes(author);
      })
    }

    if(year){
      year = year.toLocaleLowerCase();
      books = books.filter((book) => {
        return book.year.toString().toLocaleLowerCase().includes(year);
      })
    }

    return books;
  }

}
