import {Component, Input} from '@angular/core';
import {IDocuments} from "../../documents/documents.interface";

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent {
  @Input() activeDocument: IDocuments = {client_id: 0, content: "", name: ""};

}
