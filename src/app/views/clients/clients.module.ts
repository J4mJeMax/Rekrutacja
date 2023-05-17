import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsRoutingModule} from './clients-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import {TableComponent} from "../../shared/components/table/table.component";

@NgModule({
  declarations: [MainComponent, TableComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class ClientsModule {
}
