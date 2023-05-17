import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string, params?: any): Observable<any> {
    return this.http.get(url, {params});
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  put(url: string, body: any): Observable<any> {
    return this.http.put(url, body);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  patch(url: string, body: any): Observable<any> {
    return this.http.patch(url, body);
  }
}
