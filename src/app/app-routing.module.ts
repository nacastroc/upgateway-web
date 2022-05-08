import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './_core/error-pages/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'gateways',
        pathMatch: 'full'
    },
    {
        path: 'gateways',
        loadChildren: () => import('./gateways/gateways.module').then((m) => m.GatewaysModule)
    },
    {
        path: 'peripherals',
        loadChildren: () => import('./peripherals/peripherals.module').then((m) => m.PeripheralsModule)
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }