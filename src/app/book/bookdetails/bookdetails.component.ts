import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  book: any;
  allBooks: Book[];
  //books: Book[];

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit() {
    this.getAllBooks();
    /*=====route.snapshot.params=====*/
    // alert(this.route.snapshot.params.id);
    // this.bookService.getBook(parseInt(this.route.snapshot.params.id)).subscribe(book => {
    //   this.book = book;
    // });

    /*=====route.snapshot.paramMap=====*/
    // alert(this.route.snapshot.paramMap.get('id'));
    // this.bookService.getBook(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(book => {
    //   this.book = book;
    // });

    /*=====route.param.subscribe=====*/
    // this.route.params.subscribe(param => {
    //   alert(param.id);
    //   this.bookService.getBook(parseInt(param.id)).subscribe(book => {
    //     this.book = book;
    //   });
    // });

    /*=====route.paramMap.subscribe=====*/
    this.route.paramMap.subscribe(param => {
      // alert(param.get('id'));
      this.bookService.getBook(parseInt(param.get('id'))).subscribe(book => {
        this.book = book;
      });
    });
  }

  getAllBooks() {
    this.bookService.getBooks().subscribe(book => this.allBooks = book );
  }

  goBack() {
    this.location.back();
  }

}
