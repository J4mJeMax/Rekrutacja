import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientsService} from "../../clients/clients.service";
import {DocumentsService} from "../documents.service";
import {IClients} from "../../clients/clients.interface";
import {IDocuments} from "../documents.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  documentForm = new FormGroup({
    client_id: new FormControl(0, Validators.required),
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  clients: IClients[] = [];
  documents: IDocuments[] = [];

  constructor(
    private clientsService: ClientsService,
    private documentsService: DocumentsService,
    private route: ActivatedRoute
  ) {}

  getAvailableClients() {
    this.clientsService.getClients()
      .subscribe((clients: IClients[]) => {
        this.clients = clients;
      })
  }

  getAllDocuments(userId: any) {
    this.documentsService.getDocuments(userId)
      .subscribe((documents: IDocuments[]) => {
        this.documents = documents;
      })
  }

  ngOnInit() {
    this.getAvailableClients();
    this.getAllDocuments(this.route.snapshot.paramMap.get('clientId'));
  }

  onSubmit() {
    //@ts-ignore
    this.documentsService.addDocument(this.documentForm.value)
      .subscribe(() => {
        console.log('Document added');
        this.documentForm.reset();
        this.getAllDocuments(this.route.snapshot.paramMap.get('clientId'));
      });
  }
}
