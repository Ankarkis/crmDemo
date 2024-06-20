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
import { MaquinariasService } from '../services/maquinarias.service';
import { CreateMaquinariaInput, CreateOPERATIVIDADInput, UpdateMaquinariaInput } from '../API.service';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { OperatividadService } from '../services/operatividad-service.service';


@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule,CalendarModule,FloatLabelModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  providers: [MessageService, ConfirmationService]
})
export class TablesComponent {
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
    this.maquinariaService.getMaquinaria().then(data=>{
        this.maquinarias=data.data.listMaquinarias.items
    })
  }

  openNew() {
      this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',OBSERVACION:'',Patentedelvehiculo:'',TIPO:'',id:''}
      this.submitted = false;
      this.maquinariaDialog = true;
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
            this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',OBSERVACION:'',Patentedelvehiculo:'',TIPO:'',id:''}
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
                this.maquinarias.push(maquinaria.data.createMaquinaria);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Se registro la maquinaria ${this.maquinaria?.NroVehiculo}`, life: 3000 });
              }).catch(()=>{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: `hubo un problema con el  registro de la maquinaria ${this.maquinaria?.NroVehiculo}`, life: 3000 });
  
              });
         }

          this.maquinarias = [...this.maquinarias];
          this.maquinariaDialog = false;
          this.maquinaria = {DESCRIPCION:'',MARCA:'',NroVehiculo:'',OBSERVACION:'',Patentedelvehiculo:'',TIPO:'',id:''}     }
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
  this.operatividadMaquinaria.maquinariaOPERATIVIDADId=this.maquinaria?.id
  this.operatividadService.saveOperatividad(this.operatividadMaquinaria).then(()=>{
    this.operatividadDialgo=false;
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Se registro un nuevo estado de operatividad para la maquina ${this.maquinaria?.NroVehiculo}`, life: 3000 });
   
  }).catch(()=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Ha occurrido un error registrando el estado de operatividad para la maquina ${this.maquinaria?.NroVehiculo}`, life: 3000 });
   
  })
  
}

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }


}
