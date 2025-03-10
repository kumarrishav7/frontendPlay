import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../api.service';
 
@Component({
  selector: 'app-communicate-with-rabbitmq',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './communicate-with-rabbitmq.component.html',
  styleUrl: './communicate-with-rabbitmq.component.css'
})
export class CommunicateWithRabbitmqComponent {
  response: any;

  constructor(private apiService: ApiService) {}
  // Function to send the bulk messages
  sendMessages(num: number): void {
    this.apiService.sendBulkMessages(num).subscribe({
      next: (response) => {
        console.log('All messages sent:', response);
        this.response = response;
      },
      error: (err) => {
        console.error('Error sending messages:', err);
      }
    });
  }
}
