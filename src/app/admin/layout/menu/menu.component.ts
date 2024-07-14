import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private model:MenuItem[]=[
    {
      label: 'Maquinaria', icon: 'pi pi-cog',routerLink:'/admin/maquinarias'    
    },{
      label:'Operadores',icon:'pi pi-users',routerLink:'/admin/operario'   

    }]

  get menu(){
    return [... this.model]
  }

}
