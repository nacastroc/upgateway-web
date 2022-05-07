import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  getParams(search?: any, page?: number, limit?: number, order?: string): HttpParams {
    let params = new HttpParams();
    if (!!search) {
      _.forEach(search, (value, key) => {
        params = params.append(key, value);
      });
    }
    if (!!page) {
      params = params.append('page', page.toString());
    }
    if (!!limit) {
      params = params.append('limit', limit.toString());
    }
    if (!!order) {
      params = params.append('order', order);
    }

    return params;
  }
}
