import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment';
import { PaginationResult } from '../../models/pagination-results';
import { Observable } from 'rxjs';
import { ParamsService } from '../params/params.service';
import { IBaseModel } from '../../interfaces/IBaseModel';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends IBaseModel> {

  abstract url: string;

  constructor(protected http: HttpClient,
    private toastService: HotToastService,
    protected paramService: ParamsService) { }

  getUrl() {
    return environment.apiUrl + this.url;
  }

  all(search: any = {}, page = 0, limit = 20, order: string = ''): Observable<PaginationResult<T>> {
    return this.http.get<PaginationResult<T>>(this.getUrl(),
      { params: this.paramService.getParams(search, page, limit, order) });
  }

  get(id: number, search?: any): Observable<any> {
    return this.http.get<T>(this.getUrl() + '/' + id,
      { params: this.paramService.getParams(search) });
  }

  save(item: any, toastBool = true): Observable<any> {
    const ask = !item.id;
    const toast = this.toastService.observe({
      loading: !!ask ? 'Saving..' : 'Updating...',
      success: `${!!ask ? 'Save' : 'Update'} successful`,
      error: (err) => this.error(err)
    });
    if (ask) {
      const obs = this.http.post<T>(this.getUrl(), item);
      return !!toastBool ? obs.pipe(toast) : obs;
    } else {
      const obs = this.http.put<T>(this.getUrl() + '/' + item.id, item);
      return !!toastBool ? obs.pipe(toast) : obs;
    }
  }

  delete(id: number | string, args = null) {
    let params;
    if (!!args) {
      params = { params: this.paramService.getParams(args) };
    }
    return this.http.delete<T>(this.getUrl() + '/' + id, params)
      .pipe(this.toastService.observe({
        loading: 'Deleting..',
        success: 'Delete successful',
        error: (e) => this.error(e)
      }));
  }

  private error(response: HttpErrorResponse) {
    let msg = 'Ups, there was an error';
    if (!!response.error.errors && response.error.errors.length) {
      msg = '';
      response.error.errors.forEach((e: { msg: string; }) => { msg += e.msg + '.\n' })
    } else {
      msg = response.error.message
    }
    return msg
  }
}
