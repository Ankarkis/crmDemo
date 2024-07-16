import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthenticatedServiceService } from '../service/authenticated-service.service';


export const isAdminGuard: CanActivateFn = async () => {

  const authenticatedService=inject(AuthenticatedServiceService);
  const router=inject(Router);
  const isAdmin=await authenticatedService.isAdmin();

  if(!isAdmin){
    router.navigateByUrl('');
  }
  return true;
};
