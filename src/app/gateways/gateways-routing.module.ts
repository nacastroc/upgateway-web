import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewaysComponent } from './gateways.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: GatewaysComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewaysRoutingModule { }
