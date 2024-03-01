import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:5000';

  uploadBookData(data: any, endPoint: string): Observable<any> {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('author', data.author);

    formData.append('image', data.image);
    return this.http.post<any>(`${this.apiUrl}/${endPoint}`, formData);
  }

  getBookData(endPoint: string) {
    return this.http.get<any>(`${this.apiUrl}/${endPoint}`);
  }

  updateBookData(data: any, bookId: number): Observable<any> {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('categoryId', data.categoryId);
    formData.append('authorId', data.authorId);

    formData.append('image', data.image);
    console.log(formData);
    return this.http.patch<any>(`${this.apiUrl}/books/${bookId}`, formData);
  }

  deleteBook(endPoint: string, categoryId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const fullUrl = `${this.apiUrl}/${endPoint}/${categoryId}`;
    return this.http.delete<any>(fullUrl, { headers });
  }

  getCategoryBooks(id: String) {
    return this.http.get<Book[]>(`${this.apiUrl}/books?categoryId=${id}`);
  }
}
