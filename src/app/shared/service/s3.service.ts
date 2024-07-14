import { Injectable } from '@angular/core';
import { getUrl, uploadData } from 'aws-amplify/storage';
import { from } from 'rxjs';
import { Image } from '../../operador/interface/image';
@Injectable({
  providedIn: 'root'
})
export class S3Service {
  

  upload(path:string,file:any){

    return uploadData({path,data:file});
  }

  getImage(path:string){
    return getUrl({path,  options: {
      validateObjectExistence: true, // defaults to false
      useAccelerateEndpoint:false
    }})
  }

}
