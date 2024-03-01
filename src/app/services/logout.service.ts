import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor() {}

  logout(): Observable<any> {
    localStorage.removeItem('authorization');
    return of({ message: 'Logout successful' });
  }
}
