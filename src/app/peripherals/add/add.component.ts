import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Peripheral } from 'src/app/_core/models/peripheral';
import { PeripheralsService } from 'src/app/_core/services/peripherals/peripherals.service';
import { DestroyComponent } from 'src/app/_core/utils/destroy.component';

@Component({
  selector: 'app-peripherals-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends DestroyComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  id: number;
  peripheral = new Peripheral();
  serial: string;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router,
    private service: PeripheralsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.serial = this.activatedRoute.snapshot.params['serial'];
    this.peripheral.gateway = this.serial;
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.title = (!!this.id ? 'Edit ' : 'Create ') + 'a peripheral';
    this.initForm();
  }

  ngAfterViewInit(): void {
    if (this.id) {
      this.getData();
    }
  }

  initForm() {
    this.form = this.fb.group({
      vendor: [null, [Validators.required]],
      date: [null, [Validators.required]],
      status: [null, []]
    });
  }

  get vendor() { return this.form.get('vendor'); }

  get date() { return this.form.get('date'); }

  get status() { return this.form.get('status'); }

  getData() {
    this.service.get(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.peripheral = res;
        this.form.patchValue({
          vendor: this.peripheral.vendor,
          date: new Date(this.peripheral.date),
          status: this.peripheral.status,
        });
        this.serial = this.peripheral.gateway;
        this.cdr.detectChanges();
      })
  }

  save(form: FormGroup) {
    if (form.valid) {
      this.peripheral.vendor = this.vendor?.value;
      this.peripheral.date = this.date?.value;
      this.peripheral.status = !!this.status?.value;
      this.service.save(this.peripheral)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.form.reset();
          this.router.navigateByUrl(`/peripherals/list/${this.serial}`);
        })
    }
  }

}
