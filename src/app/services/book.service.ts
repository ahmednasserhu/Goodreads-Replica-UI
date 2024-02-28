import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private request:HttpClient) { }
  getBooks() {
    return this.request.get('http://localhost:5000/books');
  }
  getBookDetails(id:number) {
    return this.request.get(`http://localhost:5000/books/${id}`)
  }
  addRate(data: any) {
    return this.request.post('http://localhost:5000/books/${id}/raing', data);
  }
}
