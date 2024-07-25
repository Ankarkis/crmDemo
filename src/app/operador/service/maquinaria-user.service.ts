import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import * as query from '../../../graphql/queries';
import { Maquinaria } from '../../../API';
import { getCurrentUser } from 'aws-amplify/auth';
@Injectable({
  providedIn: 'root'
})
export class MaquinariaUserService {
  client = generateClient();


  async getListMaquinariaByOperador(){
    const id= (await getCurrentUser()).userId;
    return this.client.graphql({
      query:query.getOPERARIO,
      variables:{id:id},
      authMode:'userPool'
    }).then(operador=>{
      return operador.data.getOPERARIO?.MAQUINARIA?.items as Maquinaria[];
    })
  }


}
