import { Component } from '@angular/core';
import {ClientsService} from "../clients.service";
import {IClients} from "../clients.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private clientsService: ClientsService
  ) {}

  clients: IClients[] = [];

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe((clients: IClients[]) => {
        this.clients = clients;
      });
  }


}
