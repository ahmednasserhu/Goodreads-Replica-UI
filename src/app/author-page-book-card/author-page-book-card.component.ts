import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { Book } from '../interfaces/book';
import { FormsModule } from '@angular/forms';
import { UploadServiceService } from '../services/upload-service.service';
import { UserService } from '../services/user.service';
import { catchError } from 'rxjs';
import { error } from 'console';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-author-page-book-card',
  standalone: true,
  imports: [RatingModule, RouterLink, FormsModule],
  templateUrl: './author-page-book-card.component.html',
  styleUrl: './author-page-book-card.component.css',
})
export class AuthorPageBookCardComponent {
  @Input() book!: Book;
  allowedShelfs: string[] = ['read', 'currentlyReading', 'wantToRead'];
  rate!: Number;
  apiUrl: String = environment.apiUrl;

  constructor(private userService: UserService) {}

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

  rateBook() {
    this.userService
      .rateBook(this.book.id, this.rate)
      .pipe(
        catchError((error) => {
          console.log("Couldn't rate book : ", error);
          return error;
        })
      )
      .subscribe();
  }
}
