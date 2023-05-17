import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule)
  },
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabledBlocking' })]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
