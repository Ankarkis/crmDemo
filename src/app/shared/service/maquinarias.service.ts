import { Injectable } from '@angular/core';
import { CreateMaquinariaInput, DeleteMaquinariaInput, UpdateMaquinariaInput } from '../../API.service';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import * as query from '../../../graphql/queries';
@Injectable({
  providedIn: 'root'
})
export class MaquinariasService {

  client = generateClient();

  saveMaquinaria(maquinaria:CreateMaquinariaInput){
   return this.client.graphql(
      {
        query:mutations.createMaquinaria,
        variables:{input:maquinaria},
        authMode:'userPool'
      }
    )
    
  }

  getMaquinaria(){
    return this.client.graphql({
      query:query.listMaquinarias,
      authMode:'userPool'
    }).then(maquinaria=>{
      return maquinaria.data.listMaquinarias.items
    })
  }

  getMaquinariaById(id:string){
    return this.client.graphql({
      query:query.getMaquinaria,
      variables:{id:id},
      authMode:'userPool'
    })
  }

  updateMaquinaria(maquinaria:UpdateMaquinariaInput){
    return this.client.graphql({
      query:mutations.updateMaquinaria,
      variables:{input:maquinaria},
        authMode:'userPool'

    })
  }

  deleteMaquinaria(id:DeleteMaquinariaInput){
    return this.client.graphql(
      {
        query:mutations.deleteMaquinaria,
        variables:{input:id}
      }
    )
  }
  
}
