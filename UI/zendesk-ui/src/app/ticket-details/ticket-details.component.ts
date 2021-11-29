import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketsModel } from '../models/ticketModel';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public ticketDetail: TicketsModel,
    public dialogRef: MatDialogRef<TicketDetailsComponent>,) { }

  ngOnInit(): void {
  }

}
