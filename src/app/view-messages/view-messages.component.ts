import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../api.service';
import { map, merge, Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataSocketService } from '../data-socket.service';

@Component({
  selector: 'app-view-messages',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.css'], // Make sure this is plural, i.e. `styleUrls`
})
export class ViewMessagesComponent {
  displayedColumns: string[] = [
    'id',
    'senderId',
    'receiverId',
    'content',
    'timestamp',
  ];
  messages$!: Observable<Message[]>;

  constructor(
    private dataSocketService: DataSocketService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.messages$ = merge(
      this.apiService.getMessages(),
      this.dataSocketService.data$
    );
  }
}

// Message interface
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp?: Date | null; // Timestamp is a Date object now
}
