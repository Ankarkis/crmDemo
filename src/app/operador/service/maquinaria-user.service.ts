import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import * as query from '../../../graphql/queries';
import { Maquinaria } from '../../../API';
@Injectable({
  providedIn: 'root'
})
export class MaquinariaUserService {
  client = generateClient();


  getListMaquinariaByOperador(){
    return this.client.graphql({
      query:query.getOPERARIO,
      variables:{id:'8428d488-7051-706e-6348-7820823e5c77'},
      authMode:'apiKey'
    }).then(operador=>{
      return operador.data.getOPERARIO?.MAQUINARIA?.items as Maquinaria[];
    })
  }
}
