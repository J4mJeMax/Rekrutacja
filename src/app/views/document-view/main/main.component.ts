import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DocumentViewService} from "../document-view.service";
import {IDocuments} from "../../documents/documents.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private route: ActivatedRoute,
    private documentViewService: DocumentViewService
  ) {}

  activeDocument: IDocuments = {client_id: 0, content: "", name: ""};

  getDocument(documentId: null | string) {
    this.documentViewService.getDocument(documentId)
      .subscribe((document: any) => {
        console.log(document);
        this.activeDocument = document;
      })
  }

  ngOnInit() {
    this.getDocument(this.route.snapshot.paramMap.get('documentId'));
  }


}


