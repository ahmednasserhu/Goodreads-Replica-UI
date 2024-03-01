import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private router: Router) {}

  logout(): Observable<any> {
    localStorage.removeItem('authorization');
    this.router.navigateByUrl('admin/login');
    return of({ message: 'Logout successful' });
  }
}
