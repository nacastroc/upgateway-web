import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

import { Gateway } from 'src/app/_core/models/gateway';
import { GatewaysService } from 'src/app/_core/services/gateways/gateways.service';
import { BaseListComponent } from 'src/app/_core/utils/base-list.component';

@Component({
  selector: 'app-gateways-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseListComponent<Gateway> {

  constructor(
    service: GatewaysService,
    cdr: ChangeDetectorRef,
    private router: Router
  ) {
    super(service, cdr);
    this.displayedColumns = ['name', 'address', 'actions']
  }

  edit(serial: string) {
    this.router.navigateByUrl(`/gateways/edit/${serial}`)
  }

  delete(serial: string) {
    this.service.delete(serial)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.load();
      })
  }

}
