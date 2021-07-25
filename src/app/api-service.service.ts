import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpclient: HttpClient) {}

  getUsers(page: number): Observable<any> {
    return this.httpclient.get(`https://reqres.in/api/users?page=${page}`);
  }
}
