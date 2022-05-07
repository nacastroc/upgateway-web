import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Peripheral } from '../../models/peripheral';
import { BaseService } from '../base/base.service';
import { ParamsService } from '../params/params.service';

@Injectable({
  providedIn: 'root'
})
export class PeripheralsService extends BaseService<Peripheral> {

  url = '/peripherals'

  constructor(http: HttpClient,
    toast: HotToastService,
    paramService: ParamsService) {
    super(http, toast, paramService);
  }

}
