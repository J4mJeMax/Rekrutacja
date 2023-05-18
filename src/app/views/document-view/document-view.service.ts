import { Injectable } from '@angular/core';
import {HttpService} from "../../core/services/httpService/http.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DocumentViewService {
  constructor(
    private http: HttpService,
  ) { }

  getDocument(documentId: null | string) {
    return this.http.get('http://localhost:3000/document/' + documentId);
  }

}
