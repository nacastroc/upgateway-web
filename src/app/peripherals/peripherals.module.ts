import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeripheralsRoutingModule } from './peripherals-routing.module';
import { RouterModule } from '@angular/router';
import { PeripheralsComponent } from './peripherals.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    PeripheralsComponent,
    ListComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    PeripheralsRoutingModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ]
})
export class PeripheralsModule { }
