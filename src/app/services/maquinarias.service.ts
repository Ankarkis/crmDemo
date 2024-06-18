import { Injectable } from '@angular/core';
import { Maquinaria } from '../tables/tables.component';

@Injectable({
  providedIn: 'root'
})
export class MaquinariasService {

 private maquinarias: Maquinaria[] = [
    { id: 1, codigo: 'EXC-01', patente: 'MC0611129', tipo: 'EXCAVADORA', marca: 'KOBELCO', modelo: 'SK200-8', fecha: '1/5/2024' },
    { id: 2, codigo: 'EXC-02', patente: 'MC352706', tipo: 'EXCAVADORA', marca: 'YANMAR', modelo: 'VIO35-6B', fecha: '1/5/2024' },
    { id: 3, codigo: 'EXC-03', patente: 'MC201516', tipo: 'EXCAVADORA', marca: 'KOMATSU', modelo: 'PC120-6EO', fecha: '1/5/2024' },
    { id: 4, codigo: 'EXC-04', patente: 'MC061113', tipo: 'EXCAVADORA', marca: 'HITACHI', modelo: 'ZX200-3', fecha: '1/5/2024' },
    { id: 5, codigo: 'EXC-05', patente: 'MC061079', tipo: 'EXCAVADORA', marca: 'HITACHI', modelo: 'ZX200', fecha: '1/5/2024' },
    { id: 6, codigo: 'EXC-06', patente: 'MC664359', tipo: 'EXCAVADORA', marca: 'KOMATSU', modelo: 'PC70-8', fecha: '1/5/2024' },
    { id: 7, codigo: 'EXC-07', patente: 'MC644360', tipo: 'EXCAVADORA', marca: 'KOMATSU', modelo: 'PC70-8', fecha: '1/5/2024' },
    { id: 8, codigo: 'HINCA-01', patente: 'HWL-500R.', tipo: 'HINCADORA', marca: 'JINING HENGWANG MINING MACHINERY', modelo: 'HW500R', fecha: '1/5/2024' },
    { id: 9, codigo: 'HINCA-02', patente: 'ARMIVAN AI1200', tipo: 'HINCADORA', marca: 'ARMIVAN', modelo: 'AI1200', fecha: '1/5/2024' },
    { id: 10, codigo: 'HINCA-03', patente: 'FEX100', tipo: 'HINCADORA', marca: 'ORTECO', modelo: 'FEX100', fecha: '1/5/2024' },
    { id: 11, codigo: 'HINCA-04', patente: 'MZ460Y-3', tipo: 'HINCADORA', marca: 'SHANDONG LONGY', modelo: 'MZ460-3', fecha: '1/5/2024' },
    { id: 12, codigo: 'HINCA-05', patente: 'MZ460Y-3', tipo: 'HINCADORA', marca: 'SHANDONG LONGY', modelo: 'MZ4603', fecha: '1/5/2024' },
    { id: 13, codigo: 'GRUA-01', patente: 'SXU804', tipo: 'CAMIÓN GRÚA', marca: 'INTERNATIONAL', modelo: '7300', fecha: '1/5/2024' },
    { id: 14, codigo: 'GRUA-02', patente: 'SQL017', tipo: 'CAMIÓN GRÚA', marca: 'CHEVROLET', modelo: 'KODIAK 241', fecha: '1/5/2024' },
    { id: 15, codigo: 'TELHANDLAER-01', patente: 'MI49908', tipo: 'TELEHANDLER', marca: 'TEREX', modelo: 'TH842C', fecha: '1/5/2024' },
    { id: 16, codigo: 'TELHANDLAER-02', patente: 'MC110362', tipo: 'TELEHANDLER', marca: 'LULL', modelo: '844C-42', fecha: '1/5/2024' },
    { id: 17, codigo: 'TELHANDLAER-03', patente: '16003068', tipo: 'TELEHANDLER', marca: 'SKY TRAK', modelo: '10042', fecha: '1/5/2024' },
    { id: 18, codigo: 'TELHANDLAER-04', patente: 'MI050905', tipo: 'TELEHANDLER', marca: 'BOBCAT', modelo: 'T40140', fecha: '1/5/2024' },
    { id: 19, codigo: 'TELHANDLAER-05', patente: 'MI211704', tipo: 'TELEHANDLER', marca: 'SKYTRAK', modelo: '8042', fecha: '1/5/2024' },
    { id: 20, codigo: 'TELHANDLAER-06', patente: 'MI361695', tipo: 'TELEHANDLER', marca: 'INGERSOLL RAND', modelo: 'VR 843C', fecha: '1/5/2024' },
    { id: 21, codigo: 'TELHANDLAER-07', patente: 'MI105798', tipo: 'TELEHANDLER', marca: 'JCB', modelo: '533-105', fecha: '1/5/2024' },
    { id: 22, codigo: 'TELHANDLAER-08', patente: 'MC019663', tipo: 'TELEHANDLER', marca: 'CATERPILLAR', modelo: 'TL642C', fecha: '1/5/2024' },
    { id: 23, codigo: 'MINI-01', patente: 'MC664606 L38', tipo: 'MINICARGADOR', marca: 'NEW HOLLAND', modelo: 'L318', fecha: '1/5/2024' },
    { id: 24, codigo: 'MINI-02', patente: 'MC664605 L38', tipo: 'MINICARGADOR', marca: 'NEW HOLLAND', modelo: 'L318', fecha: '1/5/2024' },
    { id: 25, codigo: 'MINI-03', patente: 'MC082930', tipo: 'MINICARGADOR', marca: 'CATERPILLAR', modelo: '232D', fecha: '1/5/2024' },
    { id: 26, codigo: 'MINI-04', patente: 'MI014699', tipo: 'MINICARGADOR', marca: 'CATERPILLAR', modelo: '236D', fecha: '1/5/2024' },
    { id: 27, codigo: 'CAMABAJA-01', patente: 'WTN353', tipo: 'CAMABAJA', marca: 'INTERNATIONAL', modelo: '9400', fecha: '1/5/2024' },
    { id: 28, codigo: 'CAMAALTA-01', patente: 'SWM956', tipo: 'TRACTOCAMION', marca: 'INTERNATIONAL', modelo: '9400', fecha: '1/5/2024' }
];

  get getMaquinarias(){
    return this.maquinarias;
  }
  
}
