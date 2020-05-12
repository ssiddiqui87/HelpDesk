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
  tickets: Ticket[];

  constructor(private ticketService: TicketDataService) { }

   ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      (data: Ticket[]) => {
        this.tickets = data;
      },
      error => console.error(error)
    );
  }

}
