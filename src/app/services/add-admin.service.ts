import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddAdminService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  addAdmin(data: any) {
    return this.http.post<any>(`${this.apiUrl}/admin`, data);
  }
}
