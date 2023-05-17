import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsRoutingModule} from './clients-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientsComponent} from "./clients.component";

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class ClientsModule {
}
