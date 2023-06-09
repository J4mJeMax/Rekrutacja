import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentViewRoutingModule} from './document-view-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import {MatTreeModule} from "@angular/material/tree";

@NgModule({
  declarations: [MainComponent, CodeEditorComponent, TreeViewComponent],
    imports: [
        CommonModule,
        DocumentViewRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatTreeModule,
    ]
})

export class DocumentsViewModule {
}
