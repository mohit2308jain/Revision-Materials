import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../book'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _jsonURL = 'assets/booklist.json';

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<Book[]> {
    return this.http.get<Book[]>(this._jsonURL);
  }
}
