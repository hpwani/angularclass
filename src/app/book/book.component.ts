import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allBooks: Book[];

  constructor(private bookService: BookService) { 
    this.getAllBooks();
  }

  ngOnInit() {
  }

  getAllBooks() {
    this.bookService.getBooks().subscribe(book => this.allBooks = book );
  }

}
