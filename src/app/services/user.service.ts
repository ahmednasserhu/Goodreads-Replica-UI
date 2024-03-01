import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = `${environment.apiUrl}/users`;
  isLoggedIn: boolean = false;
  isAdminUser: boolean = false;
  user: User | null = null;

  constructor(private http: HttpClient) {
    this.getUser();
  }

  isLogged() {
    this.getUser();
    return this.isLoggedIn;
  }

  isAdmin() {
    this.getUser();
    return this.isAdminUser;
  }

  getUser() {
    return this.http.get<User>(`${this.apiUrl}`, {
      headers: { authorization: localStorage.getItem('authorization') || '' },
    });
  }

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
