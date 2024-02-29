import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Book } from '../interfaces/book';
import { Category } from '../interfaces/category';
import { BooksService } from '../services/books.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  imports: [BookCardComponent],
})
export class CategoryComponent implements OnInit {
  @Input() categoryId!: String;
  category!: Category;
  books!: Book[];

  constructor(
    private categoryService: CategoryService,
    private bookService: BooksService
  ) {}

  ngOnInit() {
    this.categoryService
      .getCategory(this.categoryId)
      .subscribe((category) => (this.category = category));

    this.bookService.getCategoryBooks(this.categoryId).subscribe((books) => {
      this.books = books;
    });
  }
}
