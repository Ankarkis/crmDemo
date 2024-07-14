import { Routes } from '@angular/router';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./auth/pages/auth-page/auth-page.component')
    },
    {
        path:'admin',
        component:MainLayoutComponent,
        children:[
            {
                path:'maquinarias',
                loadComponent:()=>import('./admin/pages/maquinaria-page/maquinaria-page.component')
            },{
                path:'operatividad/:id',
                loadComponent:()=>import('./admin/pages/operatividad-page/operatividad-page.component')
            },
            {
                path:'operario',
                loadComponent:()=> import('./admin/pages/operario-page/operario-page.component')
            },
            {
                path:'**',
                redirectTo:'maquinarias'
            }
        ]
    },{
        path:'maquinaria-operador',
        loadComponent:()=>import('./operador/page/maquinarias-operador/maquinarias-operador.component')
    }

];
