import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:5000/categories';

  createCategory(data: String) {
    return this.http.post<Category>(this.apiUrl, data);
  }

  getCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  updataCategory(data: String, categoryId: Number) {
    return this.http.patch<Category>(`${this.apiUrl}/${categoryId}`, data);
  }

  deleteCategory(categoryId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const fullUrl = `${this.apiUrl}/${categoryId}`;
    return this.http.delete<any>(fullUrl, { headers });
  }
}
