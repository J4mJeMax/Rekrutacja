import {Component, Input} from '@angular/core';
import {IDocuments} from "../../documents/documents.interface";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  @Input() activeDocument: IDocuments = {client_id: 0, content: "", name: ""};
}
