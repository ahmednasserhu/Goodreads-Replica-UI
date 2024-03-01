import { Component, Input, OnInit } from '@angular/core';
import { UploadServiceService } from '../services/upload-service.service';
import { Author } from '../interfaces/author';
import { DatePipe } from '@angular/common';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthorPageBookCardComponent } from '../author-page-book-card/author-page-book-card.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-author-page',
  standalone: true,
  templateUrl: './author-page.component.html',
  styleUrl: './author-page.component.css',
  imports: [
    DatePipe,
    FormsModule,
    RatingModule,
    RouterLink,
    AuthorPageBookCardComponent,
  ],
})
export class AuthorPageComponent implements OnInit {
  @Input() authorId!: string;
  author!: Author;
  authorBooks: Book[] = [];
  apiUrl: String = environment.apiUrl;

  constructor(
    private authorService: UploadServiceService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.authorService
      .getAuthor(this.authorId)
      .subscribe((author) => (this.author = author));

    this.booksService
      .getAuthorBooks(this.authorId)
      .subscribe((books) => (this.authorBooks = books));
  }
}
