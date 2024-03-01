import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(endPoint: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${endPoint}`);
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/login`, data);
  }
}
