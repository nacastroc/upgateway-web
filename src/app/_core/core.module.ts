import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyComponent } from './utils/destroy.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DestroyComponent,
    NotFoundComponent
  ],
  exports: [
    DestroyComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class CoreModule { }
