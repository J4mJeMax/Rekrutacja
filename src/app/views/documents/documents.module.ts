import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsRoutingModule} from './documents-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import {TableComponent} from "../../shared/components/table/table.component";

@NgModule({
  declarations: [MainComponent, TableComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class DocumentsModule {
}
