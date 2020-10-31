import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PhysicalAssetService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
    this.baseUrl = 'http://localhost:8081/api/physicalassets';
  }

  assignWorker(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/assign`, data);
}
}
