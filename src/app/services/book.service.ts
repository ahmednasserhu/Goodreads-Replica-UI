import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  setId(id: number): void {
    this.book.next(id);
  }

  getId$(): Observable<number> {
    return this.book.asObservable();
  }

  constructor(private request:HttpClient) { }
  getBooks() {
    return this.request.get('http://localhost:5000/books');
  }
  getBookDetails(id:number) {
    return this.request.get(`http://localhost:5000/books/${id}`)
  }
}
