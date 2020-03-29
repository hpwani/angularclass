import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsgaurdGuard implements Resolve<Book> {
  constructor(private bookService: BookService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Book> {
      let id = next.paramMap.get('id');
      // return this.bookService.getBook(parseInt(id)).map(book => {
      //   if(book) {
      //     return book;
      //   } else {
      //     return null;
      //   }
      // });
      return;
  }
  
}
