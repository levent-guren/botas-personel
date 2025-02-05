import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);
  let router = inject(Router);
  let toastr = inject(ToastrService);
  if (loginService.token != '') {
    return true;
  } else {
    router.navigate(['/login']);  // Redirect to login page if token is not found
    toastr.error('Lütfen önce giriş yapınız.');  // Show error message if token is not found and redirect to login page
    return false;
  }
};
