import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { getCurrentUser } from 'aws-amplify/auth';
export const adminGuard: CanActivateFn = async (route, state) => {

  
  return true;
};
