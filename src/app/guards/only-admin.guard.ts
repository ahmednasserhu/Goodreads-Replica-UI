import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { catchError, map, of } from 'rxjs';
import Swal from 'sweetalert2';

export const onlyAdminGuard: CanActivateFn = (route, state) => {
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
        text: 'Only Admins Allowed',
        timer: 2000,
      });
      router.navigateByUrl('/admin/login');
      return of(false);
    })
  );
};
