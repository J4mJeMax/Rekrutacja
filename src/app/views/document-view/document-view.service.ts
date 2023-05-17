import { Injectable } from '@angular/core';
import {HttpService} from "../../core/services/httpService/http.service";

@Injectable({
  providedIn: 'root'
})
export class DocumentViewService {
  constructor(
    private http: HttpService
  ) { }

  getDocuments() {
    return this.http.get('http://localhost:3000/documents')
  }

  removeDocument(id: number) {
    return this.http.delete(`http://localhost:3000/documents/${id}`)
  }

  addDocument(client: any) {
    return this.http.post('http://localhost:3000/documents', client)
  }

  editDocument(client: any) {
    return this.http.put(`http://localhost:3000/documents/${client.id}`, client)
  }

}
