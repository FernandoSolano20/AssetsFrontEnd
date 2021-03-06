import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseUrl = '';

  constructor(public http: HttpClient) { }

  getAll(): Observable<any> {
      return this.http.get(this.baseUrl);
  }

  get(id): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data): Observable<any> {
      return this.http.post(this.baseUrl, data);
  }

  update(id, data): Observable<any> {
      return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
