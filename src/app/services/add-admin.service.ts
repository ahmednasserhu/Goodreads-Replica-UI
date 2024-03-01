import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddAdminService {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  addAdmin(data: any) {
    return this.http.post<any>(`${this.apiUrl}/admin`, data);
  }
}
