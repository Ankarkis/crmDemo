import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import { CreateHorometroInput } from '../../../API';
@Injectable({
  providedIn: 'root'
})
export class CostService {
  client = generateClient();


  saveCost(cost:CreateHorometroInput){
    return this.client.graphql({
      query:mutations.createHorometro,
      variables:{input:cost},
      authMode:'userPool'
    })
  }

  

}
