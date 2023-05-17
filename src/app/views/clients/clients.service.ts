import { Injectable } from '@angular/core';
import {HttpService} from "../../core/services/httpService/http.service";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(
    private http: HttpService
  ) { }

  getClients() {
    return this.http.get('http://localhost:3000/clients')
  }

  removeClient(id: number) {
    return this.http.delete(`http://localhost:3000/clients/${id}`)
  }

  addClient(client: any) {
    return this.http.post('http://localhost:3000/clients', client)
  }

  editClient(client: any) {
    return this.http.put(`http://localhost:3000/clients/${client.id}`, client)
  }

}
