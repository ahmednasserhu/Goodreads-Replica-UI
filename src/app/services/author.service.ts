import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;

  deleteAuthor(authorId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    const fullUrl = `${this.apiUrl}/${authorId}`;
    return this.http.delete<any>(fullUrl, { headers });
  }
}
