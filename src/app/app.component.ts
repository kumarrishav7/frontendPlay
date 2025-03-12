import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyseMessageBrokerBehaviourComponent } from './analyse-message-broker-behaviour/analyse-message-broker-behaviour.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnalyseMessageBrokerBehaviourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rishav-playground';
}
