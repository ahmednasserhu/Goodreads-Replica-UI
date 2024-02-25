import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private api: string = 'http://127.0.0.1:5000';

  constructor(private fetch: HttpClient) {}

  getCategory(id: String) {
    return this.fetch.get<Category>(`${this.api}/categories/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.fetch.get<Category[]>(`${this.api}/categories`);
  }

  getCategoryBooks(id: String) {
    return this.fetch.get<Book[]>(`${this.api}/books?categoryId=${id}`);
  }
}
