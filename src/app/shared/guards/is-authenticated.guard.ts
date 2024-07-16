import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getCurrentUser,AuthError } from 'aws-amplify/auth';
import { AuthenticatedServiceService } from '../service/authenticated-service.service';
export const isAuthenticatedGuard: CanActivateFn = async () => {

  const authenticatedService=inject(AuthenticatedServiceService);

  const router=inject(Router);

  if(!await authenticatedService.isAuthenticated()){
    router.navigateByUrl(''); 
    return false;
  }

  return true;
};
