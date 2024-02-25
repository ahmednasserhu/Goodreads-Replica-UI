import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [],
  templateUrl:'./bookpage.component.html',
  styleUrl: './bookpage.component.css'
})
export class BookpageComponent {
  book!: Book;

  constructor(private bookRequest: BookService, private router:ActivatedRoute) {
  }
  ngOnInit() {
    console.log(this.router.snapshot.params['id'])
    this.bookRequest.getBookDetails(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.book = res;
      console.log(this.book);
});
}/* , (error) => {
      console.log(`${error} not Found`);
    }) */
  }
