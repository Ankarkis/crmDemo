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
    const roles=(await fetchAuthSession()).tokens?.accessToken.payload["cognito:groups"] 
    return roles?.toString().includes('admin')

  }

  async isOperador(){
    const roles=(await fetchAuthSession()).tokens?.accessToken.payload["cognito:groups"] 
    return roles?.toString().includes('operador')
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
