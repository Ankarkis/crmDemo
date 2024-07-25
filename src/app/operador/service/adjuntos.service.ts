import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { CreateADJUNTOInput } from '../../../API';
import * as mutations from '../../../graphql/mutations';
@Injectable({
  providedIn: 'root'
})
export class AdjuntosService {
  client = generateClient();


  saveAdjunto(adjunto:CreateADJUNTOInput){
    return this.client.graphql({
      query:mutations.createADJUNTO,
      variables:{input:adjunto},
      authMode:'userPool'
    })
  }
}
