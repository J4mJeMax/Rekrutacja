import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsRoutingModule} from './documents-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class DocumentsModule {
}
