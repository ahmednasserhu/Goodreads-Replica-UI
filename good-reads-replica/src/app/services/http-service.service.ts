import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private apiUrl = 'http://localhost:5000';
  httpOptions : any = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryBODBNK9vWWeDNOP1',
      'Content-Type' : 'application/json'
    }),
  };

  constructor(private http : HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data, this.httpOptions);
  }

  postAuthors(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authors`, data, this.httpOptions);
  }

}
