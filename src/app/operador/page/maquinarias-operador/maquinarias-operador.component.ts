import { Component, inject, model } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { MaquinariaUserService } from '../../service/maquinaria-user.service';
import { CreateADJUNTOInput, CreateHorometroInput, Maquinaria } from '../../../../API';
import { UploadFileComponent } from '../../../shared/component/upload-file/upload-file.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { OutputCard } from '../../interface/output-card';
import { Image } from '../../interface/image';
import { S3Service } from '../../../shared/service/s3.service';
import { MaquinariasService } from '../../../shared/service/maquinarias.service';
import { UpdateMaquinariaInput } from '../../../API.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CostService } from '../../service/cost.service';
import { AdjuntosService } from '../../service/adjuntos.service';
import { InputTextModule } from 'primeng/inputtext';



@Component({
  selector: 'app-maquinarias-operador',
  standalone: true,
  providers: [MessageService, ConfirmationService],
  imports: [CardComponent,UploadFileComponent,DialogModule,ButtonModule,CalendarModule,FormsModule,CommonModule,InputNumberModule,ToastModule,InputTextModule],
  templateUrl: './maquinarias-operador.component.html',
  styleUrl: './maquinarias-operador.component.css'
})
export default class MaquinariasOperadorComponent {
  images=model<Image[]>([]);
  costos:CreateHorometroInput=this.resetCost();
  private maquinariUserService=inject(MaquinariaUserService);
  maquinariaItems:Maquinaria[]=[];
  openDialogUpdateImage=model<OutputCard>();
  openDialogUpdateCost=model<OutputCard>();
  private s3Service=inject(S3Service);
  private maquinariaService=inject(MaquinariasService);
  private messageService=inject(MessageService);
  private costService=inject(CostService);
  private adjuntoService=inject(AdjuntosService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     this.maquinariUserService.getListMaquinariaByOperador().then(maquinarias=>{
      this.maquinariaItems=maquinarias;
    }); 
  }

  //subir imagenes a s3
  //retornar el id de donde se encuentran subidas

  async upload(ruta:string,images:Image[]):Promise<string[]>{
    const urlImages:string[]=[];
    for (const image of images) {
      const { path } = await this.s3Service.upload(`${ruta}/${image.name}`, image).result;
      urlImages.push(path);
    } 
    return urlImages;
  }

  async updateImage(){
    const urlImages:string[]= await this.upload('public/maquinarias',[this.images()[0]]);
    const maquinariaUpdate:UpdateMaquinariaInput={id:this.openDialogUpdateImage()!.id,PHOTO:urlImages.at(0)};
    this.maquinariaService.updateMaquinaria(maquinariaUpdate).then(()=>{
      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Se actualizo la imagen', life: 3000 });
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }).catch(()=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error', life: 3000 });
    
    });
  }
   addCost(){
    const id=this.createId();;
    this.costos.id=id;
    this.costos.maquinariaHOROMETROId=this.openDialogUpdateCost()?.id;
   this.costService.saveCost(this.costos).catch(()=>{      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error', life: 3000 });})
   this.addAdjuntos(id)
  }

  async addAdjuntos(horometroADJUNTOSId:string){
    const id=this.createId();
    const urlImages:string[]= await this.upload('public/costos',this.images());
    const allPromises=urlImages.map(URL=>{
      const adjuntos:CreateADJUNTOInput={id,URL,horometroADJUNTOSId}
      this.adjuntoService.saveAdjunto(adjuntos)
    })
    Promise.all(allPromises).then(()=>{
      this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Guardado con exito', life: 3000 });
      this.closeDialogAdjunto();
    }).catch(()=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error', life: 3000 });
    })
  }


  closeDialogAdjunto(){
    this.openDialogUpdateCost.set({id:'',openDialog:false});
  }
  closeDialogImage(){
    this.openDialogUpdateImage.set({id:'',openDialog:false});
  }

  resetCost():CreateHorometroInput{
    return {Date:'',Horometro:0};
  }
  createId(): string {
    let id = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let date=new Date().getTime()*1000;
      for (let i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return `${date}-${id}`;
  }
}


