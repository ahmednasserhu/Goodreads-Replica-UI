import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {
  @Input() book!: Book;
}
