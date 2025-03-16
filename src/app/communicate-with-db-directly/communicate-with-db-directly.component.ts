import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-communicate-with-db-directly',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './communicate-with-db-directly.component.html',
  styleUrl: './communicate-with-db-directly.component.css',
})
export class CommunicateWithDbDirectlyComponent {
  constructor(private apiService: ApiService) {}
  sendMessagesDirect(num: number) {
    this.apiService.sendBulkMessagesDirectToDB(num);
  }
}
