import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:5000';

  uploadCategoryData(data:any,endPoint:string){
    return this.http.post<any>(`${this.apiUrl}/${endPoint}`, data);
  }

  getCategoryData(endPoint:string){
    return this.http.get<any>(`${this.apiUrl}/${endPoint}`);
  }

  updataCategoryData(data:any, endPoint:string){
    return this.http.patch<any>(`${this.apiUrl}/${endPoint}`, data);
  }

  deleteCategory(endPoint: string, categoryId: number): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const fullUrl = `${this.apiUrl}/${endPoint}/${categoryId}`;
    return this.http.delete<any>(fullUrl, { headers });
  }
}
