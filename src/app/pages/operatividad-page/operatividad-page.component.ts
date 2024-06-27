import { Component, Input, ViewChild, inject } from '@angular/core';
import { MaquinariasService } from '../../services/maquinarias.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { StatePipe } from '../../shared/pipes/state.pipe';
import { CreateMaquinariaInput, CreateOPERATIVIDADInput, GetMaquinariaQuery, Maquinaria } from '../../API.service';
import { OperatividadService } from '../../services/operatividad-service.service';

@Component({
  selector: 'app-operatividad-page',
  standalone: true,
  providers: [MessageService, ConfirmationService],
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, CalendarModule, FloatLabelModule, StatePipe,CommonModule,RouterModule],
  templateUrl: './operatividad-page.component.html',
  styleUrl: './operatividad-page.component.css'
})
export default class OperatividadPageComponent {
  @ViewChild('dt') private dt!:Table|null
  @Input('id') set idMaquinaria(id:string){
    this.getDataMaquinariaById(id);
  }
  maquinariaService=inject(MaquinariasService);
  operatividadService=inject(OperatividadService);
  private confirmationService=inject(ConfirmationService);
  private messageService=inject(MessageService);
  maquinaria?:GetMaquinariaQuery;
  operatividadDialgo:boolean=false;
  submitted:boolean=false;
  operatividadMaquinaria:CreateOPERATIVIDADInput={
    ACTIVO: true, DESCRIPCION: '',
    FECHA: ''
  }

  getDataMaquinariaById(id:string){
    this.maquinariaService.getMaquinariaById(id).then(maquinaria=>{
      maquinaria.data.getMaquinaria?.OPERATIVIDAD?.items?.sort((a,b)=>parseInt(b.FECHA)-parseInt(a.FECHA));
      this.maquinaria=maquinaria.data;
    })
  }

  openNew() {
     this.operatividadMaquinaria = {ACTIVO:true,DESCRIPCION:'',FECHA:''}
    this.submitted = false;
    this.operatividadDialgo=true;
}






deleteOperatividad(operatividad: CreateOPERATIVIDADInput) {
    this.confirmationService.confirm({
        message: 'Quieres borrar el registro ?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          if(operatividad.id){
              this.operatividadService.deleteOPERATIVIDAD({id:operatividad.id,FECHA:operatividad.FECHA}).then(()=>{
                if(!this.maquinaria?.getMaquinaria?.OPERATIVIDAD){
                  return;
                }
                  this.maquinaria.getMaquinaria.OPERATIVIDAD.items = this.maquinaria?.getMaquinaria?.OPERATIVIDAD?.items?.filter((val) => val.id !== operatividad.id) || [];
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Maquinaria borrada', life: 3000 });
                
              })

          }
        }
    });
}
deleteMaquinaria(maquinaria:CreateMaquinariaInput){
  // if(maquinaria.id){
  //     this.maquinariaService.deleteMaquinaria({id:maquinaria.id}).then(()=>{
  //         this.maquinarias = this.maquinarias.filter((val) => val.id !== maquinaria.id);
  //         this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',Patentedelvehiculo:'',TIPO:'',id:''}
  //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Maquinaria borrada', life: 3000 });
        
  //     })

  // }

}



hideDialogOperatividad(){
  this.operatividadDialgo = false;
  this.submitted = false;
}

search(event:Event){
  const input = event.target as HTMLInputElement
  this.dt?.filterGlobal(input.value.toUpperCase(),'contains');
}


findIndexById(id: string|number): number {
  let index = -1;
  // for (let i = 0; i < this.maquinarias.length; i++) {
  //     if (this.maquinarias[i].id === id) {
  //         index = i;
  //         break;
  //     }
  // }

  return index;
}

saveOperatividad(){
this.operatividadMaquinaria.id=this.createId();
let date=new Date().getTime();
this.operatividadMaquinaria.FECHA=this.operatividadMaquinaria.FECHA?new Date(this.operatividadMaquinaria.FECHA).getTime().toString() : date.toString();
this.operatividadMaquinaria.maquinariaOPERATIVIDADId=this.maquinaria?.getMaquinaria?.id
this.operatividadService.saveOperatividad(this.operatividadMaquinaria).then(()=>{
  this.operatividadDialgo=false;
  location.reload()
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Se registro un nuevo estado de operatividad para la maquina ${this.maquinaria?.getMaquinaria?.NroVehiculo}`, life: 3000 });
 
}).catch(()=>{
  this.messageService.add({ severity: 'error', summary: 'Error', detail: `Ha occurrido un error registrando el estado de operatividad para la maquina ${this.maquinaria?.getMaquinaria?.NroVehiculo}`, life: 3000 });
 
})

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
