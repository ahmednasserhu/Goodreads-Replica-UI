import { Component, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [
    RatingModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.css',
})
export class BookpageComponent {
  @Input() book!: Book;
  rate: number = 0;
  selectedshelf!: String;
  id!: number;
  data!: {
    rating: number;
    bookId: String;
  };
  shelves = ['Read', 'Want To Read', 'Currently Reading'];
  apiUrl: String = environment.apiUrl;

  constructor(
    private bookRequest: BookService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.bookRequest.getBookDetails(this.id).subscribe((res: any) => {
      this.book = res;
    });
  } /* , (error) => {
    console.log(`${error} not Found`);
  }) */

  sendRate() {
    const userId = window.localStorage.getItem('User');
    this.data = {
      rating: this.rate,
      bookId: this.book.id,
    };
    this.bookRequest.addRate(this.data).subscribe((res) => console.log(res));
  }
}
