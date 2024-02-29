import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5000/';
  constructor(private request:HttpClient) { }
  getBooks() {
    return this.request.get(`${this.apiUrl}books`);
  }
  getBookDetails(id:number) {
    return this.request.get(`${this.apiUrl}books/${id}`)
  }
  addRate(data: any) {
    return this.request.patch(`${this.apiUrl}users`, data);
  }
}
