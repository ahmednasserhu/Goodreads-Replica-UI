import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
