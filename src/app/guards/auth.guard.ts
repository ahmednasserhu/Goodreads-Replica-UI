import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getUser().pipe(
    map((user) => {
      return true;
    }),
    catchError(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Only Registered Users Allowed',
        timer: 2000,
      });
      router.navigateByUrl('/register');
      return of(false);
    })
  );
};
