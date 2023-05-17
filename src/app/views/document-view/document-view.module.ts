import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentViewRoutingModule} from './document-view-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import {TableComponent} from "../../shared/components/table/table.component";

@NgModule({
  declarations: [MainComponent, TableComponent],
  imports: [
    CommonModule,
    DocumentViewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class DocumentsModule {
}
