import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { PeripheralsComponent } from './peripherals.component';

const routes: Routes = [
  {
    path: '', component: PeripheralsComponent,
    children: [
      { path: '', redirectTo: 'list/:serial', pathMatch: 'full' },
      { path: 'list/:serial', component: ListComponent },
      { path: 'add/:serial', component: AddComponent },
      { path: 'edit/:serial/:id', component: AddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeripheralsRoutingModule { }
