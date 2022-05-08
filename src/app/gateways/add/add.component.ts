import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Gateway } from 'src/app/_core/models/gateway';
import { GatewaysService } from 'src/app/_core/services/gateways/gateways.service';
import { DestroyComponent } from 'src/app/_core/utils/destroy.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends DestroyComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  gateway = new Gateway();
  serial: string;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router,
    private service: GatewaysService
  ) {
    super();
  }

  ngOnInit(): void {
    this.serial = this.activatedRoute.snapshot.params['serial'];
    this.title = (!!this.serial ? 'Edit ' : 'Create ') + 'a gateway';
    this.initForm();
  }

  ngAfterViewInit(): void {
    if (this.serial) {
      this.getData();
    }
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required, Validators.pattern("(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)")]]
    });
  }

  get name() { return this.form.get('name'); }

  get address() { return this.form.get('address'); }

  getData() {
    this.service.get(this.serial)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.gateway = res;
        this.form.patchValue({
          name: this.gateway.name,
          address: this.gateway.address
        });
        this.cdr.detectChanges();
      })
  }

  save(form: FormGroup) {
    if (form.valid) {
      this.gateway.name = this.name?.value;
      this.gateway.address = this.address?.value;
      this.service.save(this.gateway)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.form.reset();
          this.router.navigateByUrl('/gateways/list');
        })
    }
  }

}
