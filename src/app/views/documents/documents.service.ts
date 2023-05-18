import { Injectable } from '@angular/core';
import {HttpService} from "../../core/services/httpService/http.service";
import {IDocuments} from "./documents.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  constructor(
    private http: HttpService
  ) { }

  getDocuments(clientId: any) {
    return this.http.get(`http://localhost:3000/documents/${clientId}`)
  }

  removeDocument(id: number) {
    return this.http.delete(`http://localhost:3000/documents/${id}`)
  }

  addDocument(document: IDocuments) {
    return this.http.post('http://localhost:3000/documents', document)
  }

  editDocument(document: any) {
    return this.http.put(`http://localhost:3000/documents/${document.user_id}`, document)
  }

}
