import { CanActivateFn, Router,  } from '@angular/router';
import { AuthenticatedServiceService } from '../service/authenticated-service.service';
import { inject } from '@angular/core';

export const isOperadorGuard: CanActivateFn = async (route, state) => {
  const authenticatedService=inject(AuthenticatedServiceService);
  const router=inject(Router);
  const isOperador=await authenticatedService.isOperador();
  if(!isOperador){
    router.navigateByUrl('');
    return false;
  }
  return true;
};
