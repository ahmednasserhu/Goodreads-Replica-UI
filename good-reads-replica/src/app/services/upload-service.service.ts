import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  uploadBook(data: any): Observable<any> {
    const formData = new FormData();

    // Append form fields to formData
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('dateOfBirth', data.dateOfBirth);

    // Append the image file to formData
    formData.append('image', data.image);

    // Make the HTTP post request
    return this.http.post<any>(`${this.apiUrl}/authors`, formData);
  }
}