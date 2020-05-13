import { Component, OnInit } from '@angular/core';
import { TicketDataService } from '../ticket-data.service';
import { Ticket } from '../interfaces/ticket';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  
  constructor(private ticketData: TicketDataService) { }
  ticket: Ticket;

  ngOnInit() {
  }

}
