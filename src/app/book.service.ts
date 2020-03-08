import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  BOOKS: Book[] = [
    {id: 1, name: "Java", price: "1000", description: "Java Tutorials"},
    {id: 2, name: "JavaScript", price: "500", description: "JavaScript Tutorials"},
    {id: 3, name: "NodeJS", price: "500", description: "NodeJS Tutorials"},
    {id: 4, name: "Angular 8", price: "800", description: "Angular 8 Tutorials"},
  ];
  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.BOOKS);
  }
  getBook(id: number): Observable<Book> {
    return this.getBooks().pipe(map((books) => {
      return books.find(book => book.id == id);
    }));
  }
}
