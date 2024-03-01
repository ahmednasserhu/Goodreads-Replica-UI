import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = `${environment.apiUrl}/users`;

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
}
