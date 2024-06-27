import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./pages/maquinaria-page/maquinaria-page.component')
    },{
        path:'operatividad/:id',
        loadComponent:()=>import('./pages/operatividad-page/operatividad-page.component')
    }
];
