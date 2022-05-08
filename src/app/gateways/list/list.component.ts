import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

import { Gateway } from 'src/app/_core/models/gateway';
import { GatewaysService } from 'src/app/_core/services/gateways/gateways.service';
import { BaseListComponent } from 'src/app/_core/utils/base-list.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';

@Component({
  selector: 'app-gateways-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseListComponent<Gateway> {

  constructor(
    service: GatewaysService,
    cdr: ChangeDetectorRef,
    private router: Router,
    public dialog: MatDialog
  ) {
    super(service, cdr);
    this.displayedColumns = ['name', 'address', 'actions'];
  }

  peripherals(serial: string) {
    this.router.navigateByUrl(`/peripherals/list/${serial}`);
  }

  edit(serial: string) {
    this.router.navigateByUrl(`/gateways/edit/${serial}`);
  }

  delete(serial: string) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.service.delete(serial)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.load();
          });
      }
    });
  }

}
