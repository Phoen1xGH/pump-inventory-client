import { PumpListItem } from '../../features/pump-listing/types/PumpListItem';
import { BaseResponse } from './../api/types/base-response.data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusCode } from '../api/types/status-code.enum';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { handleResponse } from '../utils/http.utils';
import { pumpsRoute } from '../api/api-routes/pumps.routes';

@Injectable({
  providedIn: 'root'
})
export class PumpService {
  _pumps$ = new BehaviorSubject<PumpListItem[]>([]);

  constructor(private http: HttpClient) {}

  getPumps() : void {
    handleResponse(
      this.http.get<BaseResponse<PumpListItem[]>>(pumpsRoute)
    ).subscribe(response => {
      if (response.statusCode === StatusCode.OK) {
        this._pumps$.next(response.data || []);
      }
    });
  }
}
