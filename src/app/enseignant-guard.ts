import { CanActivateFn } from '@angular/router';
import {Auth} from './services/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const enseignantGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  if (authService.isAdmin())
    return true;
  else {
    router.navigate(['app-forbidden']);
    return false;
  }
};
