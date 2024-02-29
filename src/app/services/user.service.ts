import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:5000/users';

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
}
