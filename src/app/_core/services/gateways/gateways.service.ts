import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Gateway } from '../../models/gateway';
import { BaseService } from '../base/base.service';
import { ParamsService } from '../params/params.service';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService extends BaseService<Gateway> {

  url = '/gateways';

  constructor(http: HttpClient,
    toast: HotToastService,
    paramService: ParamsService) {
    super(http, toast, paramService);
  }
}
