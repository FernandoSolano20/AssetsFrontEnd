import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService extends BaseService {

  constructor(public http: HttpClient) {
    super(http);
    this.baseUrl = 'http://localhost:8081/api/assettypes';
  }
}
