import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LogoutService } from '../services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private logoutService: LogoutService, private router: Router) {}

  ngOnInit() {
    this.logoutWithConfirmation();
  }

  logoutWithConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.logoutService.logout().subscribe(
          (response) => {
            Swal.fire({
              title: 'Logged Out!',
              text: 'You have successfully logged out.',
              icon: 'success',
            });
          },
          (error) => {
            Swal.fire({
              title: 'Logout Error',
              text: 'There was an error during logout.',
              icon: 'error',
            });
          }
        );
      }
      this.router.navigateByUrl('/admin/login');
    });
  }
}
