import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import * as query from '../../../graphql/queries';
@Injectable({
  providedIn: 'root'
})
export class OperarioServiceService {
  client = generateClient();


  getOperadores(){
    return this.client.graphql(
       {
         query:query.listOPERARIOS,
         authMode:'userPool'
       }
     ).then(operadores=>operadores.data.listOPERARIOS.items)
     
   }
}
