import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';

import * as mutations from '../../../graphql/mutations';
import { CreateOPERATIVIDADInput, DeleteOPERATIVIDADInput } from '../../API.service';
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
         authMode:'userPool'
       }
     )
     
   }

   deleteOPERATIVIDAD(id:DeleteOPERATIVIDADInput){

      return this.client.graphql(
        {
          query:mutations.deleteOPERATIVIDAD,
          variables:{input:id},
          authMode:'userPool'
        }
      )
    
   }
}
