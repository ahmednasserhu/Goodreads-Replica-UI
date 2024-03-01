import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = environment.apiUrl;
  constructor(private request: HttpClient) {}
  getBooks() {
    return this.request.get(`${this.apiUrl}/books`);
  }
  getBookDetails(id: number) {
    return this.request.get(`${this.apiUrl}/books/${id}`);
  }
  addRate(data: any) {
    return this.request.patch(`${this.apiUrl}/users`, data);
  }
}
