import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = `${environment.apiUrl}/users`;
  private selectedBooksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  selectedBooks$: Observable<Book[]> = this.selectedBooksSubject.asObservable();

  constructor(private http: HttpClient) {}

  addBookToShelf(shelf: string, bookId: string) {
    return this.http.post<any>(
      `${this.apiUrl}/library?shelf=${shelf}`,
      {
        bookId,
      },
      {
        headers: { authorization: localStorage.getItem('authorization') || '' },
      }
    );
  }

  rateBook(bookId: String, rating: Number) {
    return this.http.patch(
      `${this.apiUrl}`,
      { bookId, rating },
      {
        headers: {
          authorizationi: localStorage.getItem('authorization') || '',
        },
      }
    );
  }
  getBooksFromShelf(shelf: string) {
    return this.http.get<any>(`${this.apiUrl}/library?shelf=${shelf}`);
  }
  sendSelectedBooks(books: Book[]) {
    this.selectedBooksSubject.next(books);
  }
}
