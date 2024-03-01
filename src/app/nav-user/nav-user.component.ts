import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LogoutService } from '../services/logout.service';

@Component({
  selector: 'app-nav-user',
  standalone: true,
  imports: [],
  templateUrl: './nav-user.component.html',
  styleUrl: './nav-user.component.css',
})
export class NavUserComponent {
  selectedOption: string = 'All';

  constructor(private logoutService: LogoutService, private router: Router) {}

  selectOption(option: string) {
    this.selectedOption = option;
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

      this.router.navigateByUrl('/login');
    });
  }
}
