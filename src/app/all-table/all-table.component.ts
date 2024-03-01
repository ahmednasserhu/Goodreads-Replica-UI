import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-all-table',
  standalone: true,
  imports: [
    CommonModule,
    PaginationComponent,
    RouterLink,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './all-table.component.html',
  styleUrl: './all-table.component.css',
})
export class AllTableComponent {
  bookByShelf!: any[];
  rate: number = 0;
  apiUrl: string = environment.apiUrl;
  shelves = ['read', 'currentlyReading', 'wantToRead'];
  data!: {
    rating: number;
    bookId: String;
  };
  constructor(
    private userService: UserService,
    private bookRequest: BookService
  ) {}
  ngOnInit() {
    this.userService.selectedBooks$.subscribe((res) => {
      console.log(res);
      this.bookByShelf = res;
      console.log('shelf book from table:' + this.bookByShelf);
    });
  }
  sendRate(bookId: string) {
    this.data = {
      rating: this.rate,
      bookId: bookId,
    };
    this.bookRequest.addRate(this.data).subscribe((res) => console.log(res));
  }
  addBookToShelf(event: any, bookId: String) {
    const shelf = event.target.value;
    if (!this.shelves.includes(shelf)) {
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
