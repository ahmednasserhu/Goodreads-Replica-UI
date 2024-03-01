import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    const { firstName, lastName, username, email, password, imageUrl } = data;
    const filteredData = {
      firstName,
      lastName,
      email,
      username,
      password,
      imageUrl,
    };

    return this.http.post<any>(`${this.apiUrl}/users/`, filteredData);
  }
}
