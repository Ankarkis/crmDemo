import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser,fetchAuthSession } from 'aws-amplify/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedServiceService {
  client = generateClient();

  constructor() { }
  async isAuthenticated(){
     const currentUser=await getCurrentUser().catch(()=>{return false;});
     return currentUser ? true: false;
  }
  async isAdmin(){
    return (await fetchAuthSession()).tokens?.accessToken.payload.scope?.includes('admin')

  }

  async isOperador(){
    return (await fetchAuthSession()).tokens?.accessToken.payload.scope?.includes('operador')

  }
  

  logOut(){
    localStorage.clear()
  }


  async getRole(){
    return (await fetchAuthSession())
  }

  private async getIdUser(){
    return (await getCurrentUser()).userId;
  }


}
