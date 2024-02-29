import { Component, Input, OnInit } from '@angular/core';
import { UploadServiceService } from '../services/upload-service.service';
import { Author } from '../interfaces/author';
import { DatePipe } from '@angular/common';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';
import { RatingModule } from 'primeng/rating';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-author-page',
  standalone: true,
  imports: [DatePipe, FormsModule, RatingModule, ReactiveFormsModule],
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css',
})
export class AuthorPageComponent implements OnInit {
  @Input() authorId!: string;
  allowedShelfs: string[] = ['read', 'currentlyReading', 'wantToRead'];

  author!: Author;
  authorBooks: Book[] = [];

  constructor(
    private authorService: UploadServiceService,
    private booksService: BooksService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authorService
      .getAuthor(this.authorId)
      .subscribe((author) => (this.author = author));

    this.booksService
      .getAuthorBooks(this.authorId)
      .subscribe((books) => (this.authorBooks = books));
  }

  addBookToShelf(event: any, bookId: String) {
    const shelf = event.target.value;
    if (!this.allowedShelfs.includes(shelf)) {
      console.log('Invalid shelf name, no request sent to BackEnd');
      return;
    }
    this.userService
      .addBookToShelf(event.target.value, bookId.toString())
      .pipe(
        catchError((error) => {
          console.log("Couldn't add book to shelf : ", error);
          return error;
        })
      )
      .subscribe();
  }
}
