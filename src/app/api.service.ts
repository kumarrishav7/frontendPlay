import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API URL (replace with your actual API endpoint)
  private apiUrl = 'https://rishavplayground-fsdtbkgme6fmagan.canadacentral-01.azurewebsites.net/api/Notifications';

  // private apiUrl = 'http://localhost:5151/api/Notifications';

  constructor(private http: HttpClient) {}

  // Function to generate a random string of 5 characters
  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  // Function to send 100 API calls with random string and timestamp
  sendBulkMessages(num: number): Observable<any[]> {
    const requests = [];

    for (let i = 0; i < num; i++) {
      const randomString = this.generateRandomString(5);
      const timestamp = Date.now(); // Current timestamp

      // Create the payload for each request
      const payload = {
        message: `${randomString}-${timestamp}`  // Append random string with timestamp
      };

      // Create the HTTP request for each call
      const request = this.http.post(this.apiUrl, payload);
      requests.push(request);
    }

    // Use forkJoin to wait for all requests to complete
    return forkJoin(requests);
  }
}
