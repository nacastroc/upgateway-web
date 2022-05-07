import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestroyComponent } from './utils/destroy.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DestroyComponent
  ],
  exports: [
    DestroyComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class CoreModule { }
