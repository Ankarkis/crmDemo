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

export interface Maquinaria {
    id: string | number;
    codigo: string;
    patente: string;
    tipo: string;
    marca: string;
    modelo: string;
    fecha: string;
}
  

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  providers: [MessageService, ConfirmationService]
})
export class TablesComponent {
  @ViewChild('dt') private dt!:Table|null;
  maquinariaDialog: boolean = false;
  maquinarias:Maquinaria[]=[]
  maquinaria?: Maquinaria;

  selectedProducts!: any[] | null;

  submitted: boolean = false;

  statuses!: any[];

  private messageService=inject(MessageService);
  private confirmationService=inject(ConfirmationService);
  private maquinariaService=inject(MaquinariasService);

  ngOnInit() {
      // this.productService.getProducts().then((data) => (this.products = data));

      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
      this.maquinarias=this.maquinariaService.getMaquinarias;
  }

  openNew() {
      this.maquinaria = {id:'',patente:'',codigo:'',fecha:'',marca:'',modelo:'',tipo:' '};
      this.submitted = false;
      this.maquinariaDialog = true;
  }



  editProduct(maquinaria: Maquinaria) {
      this.maquinaria = { ...maquinaria };
      this.maquinariaDialog = true;
  }

  deleteProduct(maquinaria: Maquinaria) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + maquinaria.codigo + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.maquinarias = this.maquinarias.filter((val) => val.id !== maquinaria.id);
              this.maquinaria = {id:'',patente:'',codigo:'',fecha:'',marca:'',modelo:'',tipo:' '};
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
          }
      });
  }

  hideDialog() {
      this.maquinariaDialog = false;
      this.submitted = false;
  }

  search(event:Event){
    const input = event.target as HTMLInputElement
    this.dt?.filterGlobal(input.value.toUpperCase(),'contains');
  }

  saveMaquinaria() {
      this.submitted = true;

      if (this.maquinaria?.codigo?.trim()) {
          if (this.maquinaria.id) {
             this.maquinarias[this.findIndexById(this.maquinaria.id)] = this.maquinaria;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          } else {
              this.maquinaria.id = this.createId();
            this.maquinarias.unshift(this.maquinaria);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          }

          this.maquinarias = [...this.maquinarias];
          this.maquinariaDialog = false;
          this.maquinaria = {id:'',patente:'',codigo:'',fecha:'',marca:'',modelo:'',tipo:' '};      }
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

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }


}
