import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'gateways',
        loadChildren: () => import('./gateways/gateways.module').then((m) => m.GatewaysModule)
    },
    {
        path: '',
        redirectTo: 'gateways',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }