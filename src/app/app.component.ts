import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyseMessageBrokerBehaviourComponent } from './analyse-message-broker-behaviour/analyse-message-broker-behaviour.component';
import { LoadingService } from './loading.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { ViewMessagesComponent } from './view-messages/view-messages.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AnalyseMessageBrokerBehaviourComponent,
    CommonModule,
    MatProgressSpinnerModule,
    // ViewMessagesComponent,
    FileUploadComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loading$: Observable<boolean>;
  title = 'rishav-playground';
  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}
