import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TicketsModel } from './models/ticketModel';
import { TicketsBaseModel } from './models/ticketsBaseModel';

@Injectable({
  providedIn: 'root'
})
export class ZendeskService {

  constructor(private api: ApiService) { }

  getTickets(): Observable<TicketsModel[]> {
    return this.api.get('ticket/all')
  }
}
