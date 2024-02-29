import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [RatingModule, ReactiveFormsModule,FormsModule, RouterLink],
  templateUrl:'./bookpage.component.html',
  styleUrl: './bookpage.component.css'
})
export class BookpageComponent {
  book!: Book;
  rate: number = 0;


  constructor(private bookRequest: BookService, private router:ActivatedRoute) {
  }
  ngOnInit() {
    this.bookRequest.getBookDetails(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.book = res;
    });
  }/* , (error) => {
    console.log(`${error} not Found`);
  }) */
  getRate() {
    console.log(this.rate);
  }
  sendRate(data: any) {
    this.bookRequest.addRate(data).subscribe((res) =>
      console.log(res))
  }
  }
