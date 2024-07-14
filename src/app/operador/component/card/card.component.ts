import { Component, Input, model, numberAttribute } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Maquinaria } from '../../../../API';
import { NoPhotoDirective } from '../../../shared/directive/no-photo.directive';
import { OutputCard } from '../../interface/output-card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonModule,NoPhotoDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true,alias:'maquinaria'}) maquinariaData!:Maquinaria;
  openDialogUpdateImage=model<OutputCard>();
  openDialogUpdateCost=model<OutputCard>();
  
  openDialogImage(id:string){
    this.openDialogUpdateImage.set({id,openDialog:true});
  }
  openDialogCost(id:string){
    this.openDialogUpdateCost.set({id,openDialog:true});
  }

}
