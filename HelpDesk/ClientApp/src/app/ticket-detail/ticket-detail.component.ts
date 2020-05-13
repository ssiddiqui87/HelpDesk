import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { TicketDataService } from '../ticket-data.service';

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss']
})
/** ticket-detail component*/
export class TicketDetailComponent {
 
  @Input() myTicket: Ticket;

  constructor(private ticketService: TicketDataService) { }

  ngOnInit(): void {
    
  }

}
