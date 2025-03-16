import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { Message } from './view-messages/view-messages.component';
import { BaseUrl } from './constants';

@Injectable({
  providedIn: 'root',
})
export class DataSocketService {
  private hubConnection!: signalR.HubConnection;
  private dataSubject = new BehaviorSubject<Message[]>([]);
  data$ = this.dataSubject.asObservable();
  private hubUrl = BaseUrl.consumer + '/listHub';

  constructor() {
    this.startConnection();
    this.addDataListener();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.hubUrl, {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connected'))
      .catch((err) => console.error('Error while starting connection: ' + err));
  }

  private addDataListener() {
    this.hubConnection.on('ReceiveDataUpdate', (data) => {
      this.dataSubject.next(data);
    });
  }
}
