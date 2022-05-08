import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GatewaysComponent } from './gateways.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: GatewaysComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:serial', component: AddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewaysRoutingModule { }
