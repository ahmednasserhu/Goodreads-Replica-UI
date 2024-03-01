import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books!: Array<Book>;
  apiUrl: String = environment.apiUrl;
  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (res: any) => {
        this.books = res;
        console.log(this.books);
      },
      (error) => {
        this.router.navigate(['not-found']);
      }
    );
  }
  redirectToBook(id: String) {
    this.router.navigate(['books', id]);
  }
}
