import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, mergeMap, Observable } from 'rxjs';
import { Message } from './view-messages/view-messages.component';
import { BaseUrl } from './constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = BaseUrl.producer + '/api/Notifications';

  private apiDirectUrl =
    BaseUrl.producer + '/api/Notifications/SendNotificationDirect';

  private apiGetUrl = BaseUrl.producer + '/api/Notifications';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiGetUrl);
  }

  // Function to generate a random string of 5 characters
  private generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  sendBulkMessages(num: number) {
    const requests = [];

    for (let i = 0; i < num; i++) {
      const randomString = this.generateRandomString(5);
      const timestamp = Date.now();

      const payload = {
        message: `${randomString}-${timestamp}`,
      };
      const request = this.http.post(this.apiUrl, payload);
      requests.push(request);
    }

    from(requests)
      .pipe(
        mergeMap((request) => request, 1000) // Limit to 1000 concurrent requests
      )
      .subscribe({
        next: (response) => console.log('Request successful', response),
        error: (err) => console.error('Global error', err),
      });

    // Use forkJoin to wait for all requests to complete
    // return forkJoin(requests);
  }

  sendBulkMessagesDirectToDB(num: number) {
    const requests = [];

    for (let i = 0; i < num; i++) {
      const randomString = this.generateRandomString(5);
      const timestamp = Date.now();

      const payload = {
        message: `${randomString}-${timestamp}`,
      };
      const request = this.http.post(this.apiDirectUrl, payload);
      requests.push(request);
    }

    from(requests)
      .pipe(
        mergeMap((request) => request, 1000) // Limit to 1000 concurrent requests
      )
      .subscribe({
        next: (response) => console.log('Request successful', response),
        error: (err) => console.error('Global error', err),
      });

    // Use forkJoin to wait for all requests to complete
    // return forkJoin(requests);
  }
}
