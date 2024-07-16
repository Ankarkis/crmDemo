import { Routes } from '@angular/router';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';
import { isAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { isAdminGuard } from './shared/guards/is-admin.guard';
import { isOperadorGuard } from './shared/guards/is-operador.guard';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./auth/pages/auth-page/auth-page.component')
    },
    {
        path:'admin',
        canActivateChild:[isAuthenticatedGuard,isAdminGuard],
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
        canActivate:[isAuthenticatedGuard,isOperadorGuard],
        loadComponent:()=>import('./operador/page/maquinarias-operador/maquinarias-operador.component')
    }

];
