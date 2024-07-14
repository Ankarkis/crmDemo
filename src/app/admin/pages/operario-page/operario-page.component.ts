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
  private idUser:string='';
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
    if(this.maquinariaSelect){
      return;
    }
    const {id}=this.maquinariaSelect;
    const maquinariaOperador:UpdateMaquinariaInput={id,}
    // this.maquinariaService.updateMaquinaria()
  }


}
