import { Pipe, PipeTransform } from '@angular/core';
import { OPERATIVIDAD } from '../../API.service';

@Pipe({
  name: 'state',
  standalone: true
})
export class StatePipe implements PipeTransform {

  transform(value: OPERATIVIDAD[]|boolean): string {
    if(typeof value=='boolean'){
      return value ? 'Operando' : 'No Operando'
    }
    value.sort((a,b)=> parseInt(b.FECHA)-parseInt(a.FECHA))
    if(value.length==0){
      return 'Operando'
    }
    return value[0].ACTIVO?'Operando':'No Operando';

  }

}
