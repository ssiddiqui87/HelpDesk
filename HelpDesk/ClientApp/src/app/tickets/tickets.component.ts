import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { TicketDataService } from '../ticket-data.service';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
/** tickets component*/
export class TicketsComponent {
  @Input() myTicket: Ticket;

  constructor(private ticketService: TicketDataService) { }

  ngOnInIt(): void {

  }

}
