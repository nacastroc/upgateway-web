import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewaysRoutingModule } from './gateways-routing.module';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../_core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GatewaysRoutingModule,
    CoreModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule, 
    MatFormFieldModule
  ]
})
export class GatewaysModule { }
