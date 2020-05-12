import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './interfaces/ticket';

@Injectable()
export class TicketDataService {
    constructor(private http: HttpClient) {

    }
  getTickets() {
    let result = this.http.get<Ticket[]>('/api/ticket');
    //console.log(result);
    return result;
  }
}
