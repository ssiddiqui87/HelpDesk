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
  ticketSection: boolean[] = [];

  constructor(private ticketService: TicketDataService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      (data: Ticket[]) => {

        for (let i = 0; i < data.length; i++) {
          this.ticketSection.push(true);
        }
        this.tickets = data;
      },
      error => console.error(error)
    );
  }

  showFullTickets(section: number) {
    for (let i = 0; i < this.ticketSection.length; i++) {
      this.ticketSection[i] = true;
    }

    this.ticketSection[section] = false;
  }

}
