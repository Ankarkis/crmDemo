import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
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
import { CreateMaquinariaInput, CreateOPERATIVIDADInput, UpdateMaquinariaInput } from '../../../API.service';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { OperatividadService } from '../../services/operatividad-service.service';
import { StatePipe } from "../../../shared/pipes/state.pipe";
import { RouterModule } from '@angular/router';
import { MaquinariasService } from '../../../shared/service/maquinarias.service';


@Component({
    standalone: true,
    templateUrl: './maquinaria-page.component.html',
    styleUrl: './maquinaria-page.component.css',
    providers: [MessageService, ConfirmationService],
    imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule, CalendarModule, FloatLabelModule, StatePipe,CommonModule,RouterModule]
})
export default class  MaquinariaPageComponent {
  @ViewChild('dt') private dt!:Table|null;
   maquinariaDialog: boolean = false;
  operatividadDialgo:boolean=false;
  maquinarias:CreateMaquinariaInput[]=[]
  maquinaria?: CreateMaquinariaInput;
  operatividadMaquinaria:CreateOPERATIVIDADInput={
    ACTIVO: true, DESCRIPCION: '',
    FECHA: ''
  }
  submitted: boolean = false;
  private messageService=inject(MessageService);
  private confirmationService=inject(ConfirmationService);
  private maquinariaService=inject(MaquinariasService);
  private operatividadService=inject(OperatividadService)

  ngOnInit() {
      // this.productService.getProducts().then((data) => (this.products = data));
      this.createId()
    this.maquinariaService.getMaquinaria().then(data=>{
        this.maquinarias=data.sort((a,b)=>this.tranformDateToUnix(b.updatedAt)-this.tranformDateToUnix(a.updatedAt));
    })

  }

  openNew() {
      this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',Patentedelvehiculo:'',TIPO:'',id:''}
      this.submitted = false;
      this.maquinariaDialog = true;
  }


  tranformDateToUnix(date:string):number{
  return new Date(date).getDate();
  }



  addStatusOperatividad(maquinaria:CreateMaquinariaInput) {
    this.maquinaria={... maquinaria}
    this.operatividadMaquinaria={ACTIVO: true, DESCRIPCION: '',FECHA: ''}
      this.operatividadDialgo = true;
  }

  deleteProduct(maquinaria: CreateMaquinariaInput) {
      this.confirmationService.confirm({
          message: 'Quieres borrar el vehiculo ' + maquinaria.NroVehiculo + '?',
          header: 'Confirmar',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.deleteMaquinaria(maquinaria)
          }
      });
  }
deleteMaquinaria(maquinaria:CreateMaquinariaInput){
    if(maquinaria.id){
        this.maquinariaService.deleteMaquinaria({id:maquinaria.id}).then(()=>{
            this.maquinarias = this.maquinarias.filter((val) => val.id !== maquinaria.id);
            this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',Patentedelvehiculo:'',TIPO:'',id:''}
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Maquinaria borrada', life: 3000 });
          
        })

    }

}


  hideDialog() {

  }
  hideDialogOperatividad(){
    this.maquinariaDialog = false;
    this.submitted = false;
  }

  search(event:Event){
    const input = event.target as HTMLInputElement
    this.dt?.filterGlobal(input.value.toUpperCase(),'contains');
  }

  saveMaquinaria() {
      this.submitted = true;

      if (this.maquinaria?.NroVehiculo?.trim()) {
          if (this.maquinaria.id) {
   
            // // const maquinaria:UpdateMaquinariaInput={id:this.maquinaria.id,DESCRIPCION:this.maquinaria.DESCRIPCION,MARCA:this.maquinaria.MARCA,NroVehiculo:this.maquinaria.NroVehiculo,OBSERVACION:this.maquinaria.OBSERVACION,Patentedelvehiculo:this.maquinaria.Patentedelvehiculo,TIPO:this.maquinaria.TIPO};
            // // console.log(this.maquinaria)
            // // this.maquinaria
            // this.maquinariaService.updateMaquinaria(maquinaria).then(()=>{
            //     this.maquinarias[this.findIndexById(maquinaria.id)] = this.maquinaria
               
            //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Maquinaria actualizada', life: 3000 });
    
            // })
                  } else {
              this.maquinaria.id = this.createId();
              this.maquinariaService.saveMaquinaria(this.maquinaria).then(maquinaria=>{
                location.reload()
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Se registro la maquinaria ${this.maquinaria?.NroVehiculo}`, life: 3000 });
              }).catch(()=>{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: `hubo un problema con el  registro de la maquinaria ${this.maquinaria?.NroVehiculo}`, life: 3000 });
  
              });
         }

          this.maquinarias = [...this.maquinarias];
          this.maquinariaDialog = false;
          this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',Patentedelvehiculo:'',TIPO:'',id:''}     }
  }

  findIndexById(id: string|number): number {
    let index = -1;
    for (let i = 0; i < this.maquinarias.length; i++) {
        if (this.maquinarias[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

saveOperatividad(){
  this.operatividadMaquinaria.id=this.createId();
  let date=new Date().getTime();
  this.operatividadMaquinaria.FECHA=this.operatividadMaquinaria.FECHA?new Date(this.operatividadMaquinaria.FECHA).getTime().toString() : date.toString();
  this.operatividadMaquinaria.maquinariaOPERATIVIDADId=this.maquinaria?.id
  this.operatividadService.saveOperatividad(this.operatividadMaquinaria).then(()=>{
    this.operatividadDialgo=false;
    location.reload()
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Se registro un nuevo estado de operatividad para la maquina ${this.maquinaria?.NroVehiculo}`, life: 3000 });
   
  }).catch(()=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Ha occurrido un error registrando el estado de operatividad para la maquina ${this.maquinaria?.NroVehiculo}`, life: 3000 });
   
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
