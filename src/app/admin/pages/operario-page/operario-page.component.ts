import { Component, inject } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { OperarioServiceService } from '../../services/operario-service.service';
import { OPERARIO } from '../../../../API';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NoPhotoDirective } from '../../../shared/directive/no-photo.directive';
import { MaquinariasService } from '../../../shared/service/maquinarias.service';
import { CreateMaquinariaInput, Maquinaria, UpdateMaquinariaInput } from '../../../API.service';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-operario',
  standalone: true,
  imports: [	ToastModule,InputTextModule,TableModule,ToggleButtonModule,ButtonDirective,NoPhotoDirective,DialogModule,ButtonModule,AutoCompleteModule,FormsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './operario-page.component.html',
  styleUrl: './operario-page.component.css'
})
export default class OperarioPageComponent {
  private operadorService=inject(OperarioServiceService);
  private operadoresPrivate:OPERARIO[]=[];
  private maquinariaService=inject(MaquinariasService);
  private maquinariaPrivate:CreateMaquinariaInput[]=[];
  isExpanded:boolean=false;
  isOpenDialog:boolean=false;
  maquinariaSelect!:CreateMaquinariaInput;
  filteredMaquinaria:CreateMaquinariaInput[]=[];
  router=inject(Router);
  private idUser:string='';
  private messageService=inject(MessageService);
  get operadores(){
    return [...this.operadoresPrivate]
  }



  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.operadoresPrivate=  await this.operadorService.getOperadores();
    this.maquinariaPrivate= await this.maquinariaService.getMaquinaria();


  }

  addMaquinariaOperador(id:string){
    this.idUser=id;
    this.isOpenDialog=true;
  }

  filterMaquinaria(event:AutoCompleteCompleteEvent){

    this.filteredMaquinaria=this.maquinariaPrivate.filter(maquinaria=>maquinaria.NroVehiculo.includes( event.query.toLocaleUpperCase()))
  }

  saveMaquinariaOperador(){
    if(!this.maquinariaSelect.id){
      return;
    }
    const {id}=this.maquinariaSelect;
    const maquinariaOperador:UpdateMaquinariaInput={id,oPERARIOMAQUINARIAId:this.idUser}
    this.maquinariaService.updateMaquinaria(maquinariaOperador).then(()=>{
      this.router.navigateByUrl('admin/operario',{skipLocationChange:true})
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Se ha asiganido la maquina al usuario con exito`, life: 3000 });
      
    }).catch(()=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `Ha Ocurrio un error`, life: 3000 });
    })
  }
  close(){
    this.isOpenDialog=false;
  }


}
