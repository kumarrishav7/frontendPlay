import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [NgIf],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {
  fileUrl: string | null = null;

  constructor(private http: HttpClient) {}

  uploadFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    this.http
      .post<{ FileUrl: string }>('http://localhost:5034/api/upload', formData)
      .subscribe((response) => (this.fileUrl = response.FileUrl));
  }
}
