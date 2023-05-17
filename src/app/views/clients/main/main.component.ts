import { Component } from '@angular/core';
import {ClientsService} from "../clients.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private clientsService: ClientsService
  ) {}

  clients: any[] = [];




  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((clients: any[]) => {
        console.log(clients)
        this.clients = clients;
      });
  }


}
