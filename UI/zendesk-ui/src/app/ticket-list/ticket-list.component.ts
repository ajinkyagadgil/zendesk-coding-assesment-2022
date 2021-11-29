import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TicketsModel } from '../models/ticketModel';
import { TicketsBaseModel } from '../models/ticketsBaseModel';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { ZendeskService } from '../zendesk.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'subject', 'status', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private zendeskService: ZendeskService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  tickets:  MatTableDataSource<TicketsModel>;
  ngOnInit() {
    this.loadNext()
  }

  loadNext(){
    this.zendeskService.getTickets().subscribe(res => {
      this.tickets = new MatTableDataSource(res)
      this.tickets.sort = this.sort;
      this.tickets.paginator = this.paginator;
      console.log(res)
    },err =>{
      this._snackBar.open('There is some error. Please try again');
    })
  }

  ticketDetails(ticket: TicketsModel){
    const dialogRef = this.dialog.open(TicketDetailsComponent, {
      disableClose: true,
      data: ticket
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

}
