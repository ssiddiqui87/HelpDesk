import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketDataService } from '../ticket-data.service';
import { Ticket } from '../interfaces/ticket';
import { JoinedItem } from '../interfaces/favorite';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  resolution: string;
  resolvedby: string;
  @Input() item: JoinedItem;
  @Output() updateEmitter = new EventEmitter<Ticket>();
  constructor(private ticketData: TicketDataService) { }
  ticket: Ticket;

  ngOnInit() {
  }

  editTicket(ticketid: number, resolution: string, resolvedby: string) {
    let ticket: Ticket = {
      ticketid: 0,
      userid: this.ticketData.userID,
      title: this.item.title,
      category: this.item.category,
      ticketdetail: this.item.ticketdetail,
      openedby: this.item.openedby,
      ticketstatus: true,
      resolution: resolution,
      resolvedby: resolvedby
    }

    this.updateEmitter.emit(ticket);
  }

}
