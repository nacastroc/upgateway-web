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
import { MatCardModule } from '@angular/material/card';
import { GatewaysComponent } from './gateways.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GatewaysComponent,
    ListComponent,
    AddComponent
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
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class GatewaysModule { }
