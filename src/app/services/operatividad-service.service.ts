import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { CreateOPERATIVIDADInput } from '../API.service';
import * as mutations from './../../graphql/mutations';
@Injectable({
  providedIn: 'root'
})
export class OperatividadService {
  client = generateClient();

  saveOperatividad(operatividad:CreateOPERATIVIDADInput){
    return this.client.graphql(
       {
         query:mutations.createOPERATIVIDAD,
         variables:{input:operatividad},
         authMode:'apiKey'
       }
     )
     
   }
}
