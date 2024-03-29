import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  uploadData(data: any, endPoint: string): Observable<any> {
    const formData = new FormData();

    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('dateOfBirth', data.dateOfBirth);

    formData.append('image', data.image);

    return this.http.post<any>(`${this.apiUrl}/${endPoint}`, formData);
  }
  updateData(data: any, endPoint: string): Observable<any> {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('dateOfBirth', data.dateOfBirth);
    formData.append('image', data.image);

    return this.http.patch<any>(`${this.apiUrl}/${endPoint}`, formData);
  }

  uploadAuthorData(data: any, endPoint: string) {
    return this.http.post<any>(`${this.apiUrl}/${endPoint}`, data);
  }

  getAuthors() {
    return this.http.get<Author[]>(`${this.apiUrl}/authors`);
  }

  getAuthor(authorId: String | Number) {
    return this.http.get<Author>(`${this.apiUrl}/authors/${authorId}`);
  }
}
