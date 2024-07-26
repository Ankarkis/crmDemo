import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import { CreateCOSTOInput } from '../../../API';
@Injectable({
  providedIn: 'root'
})
export class CostService {
  client = generateClient();


  saveCost(cost:CreateCOSTOInput){
    return this.client.graphql({
      query:mutations.createCOSTO,
      variables:{input:cost},
      authMode:'userPool'
    })
  }

  

}
