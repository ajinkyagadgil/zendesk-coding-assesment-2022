import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  {path:'tickets', component:TicketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
