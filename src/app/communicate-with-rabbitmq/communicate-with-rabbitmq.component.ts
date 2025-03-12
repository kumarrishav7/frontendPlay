import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-communicate-with-rabbitmq',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './communicate-with-rabbitmq.component.html',
  styleUrl: './communicate-with-rabbitmq.component.css',
})
export class CommunicateWithRabbitmqComponent {
  constructor(private apiService: ApiService) {}

  sendMessages(num: number) {
    this.apiService.sendBulkMessages(num);
  }
}
