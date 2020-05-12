import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './interfaces/ticket';

@Injectable()
export class TicketDataService {
    constructor(private http: HttpClient) {

    }
  getTickets() {
    return this.http.get<Ticket[]>('/api/ticket');
  }
}
