import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'documents/:clientId',
    loadChildren: () => import('./views/documents/documents.module').then(m => m.DocumentsModule)
  },
  {
    path: 'documents-view/:documentId',
    loadChildren: () => import('./views/document-view/document-view.module').then(m => m.DocumentsViewModule)
  },
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
