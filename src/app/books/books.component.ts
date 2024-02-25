import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
[x: string]: any;
books!: Array<Book>;
  constructor(private bookService: BookService, private router: Router ) { }
  ngOnInit() {
    this.bookService.getBooks().subscribe((res:any) => {
      this.books = res;
      console.log(this.books)
    })
  }
  redirectToBook(id:number) {
    this.router.navigate(['books', id]);
  }
}
