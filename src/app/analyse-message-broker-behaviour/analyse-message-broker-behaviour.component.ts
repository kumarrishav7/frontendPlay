import { Component, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommunicateWithRabbitmqComponent } from '../communicate-with-rabbitmq/communicate-with-rabbitmq.component';

@Component({
  selector: 'app-analyse-message-broker-behaviour',
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CommunicateWithRabbitmqComponent,
  ],
  templateUrl: './analyse-message-broker-behaviour.component.html',
  styleUrl: './analyse-message-broker-behaviour.component.css',
})
export class AnalyseMessageBrokerBehaviourComponent {
  accordion = viewChild.required(MatAccordion);
}
