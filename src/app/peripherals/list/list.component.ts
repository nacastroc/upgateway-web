import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Gateway } from 'src/app/_core/models/gateway';
import { GatewaysService } from 'src/app/_core/services/gateways/gateways.service';
import { PeripheralsService } from 'src/app/_core/services/peripherals/peripherals.service';
import { DestroyComponent } from 'src/app/_core/utils/destroy.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';

@Component({
  selector: 'app-peripherals-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends DestroyComponent implements OnInit {

  gateway: Gateway;
  serial: string;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private peripheralsService: PeripheralsService,
    private router: Router,
    private service: GatewaysService,
    public dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this.serial = this.activatedRoute.snapshot.params['serial'];
    this.load();
  }

  load() {
    this.loading = true;
    this.service.get(this.serial)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.gateway = res;
        this.loading = false;
        this.cdr.detectChanges();
      })
  }

  edit(id: number) {
    this.router.navigateByUrl(`/peripherals/edit/${this.gateway.serial}/${id}`);
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!!result) {
        this.peripheralsService.delete(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.load();
          });
      }
    });
  }

}
