import { TestBed } from '@angular/core/testing';

import { DataSocketService } from './data-socket.service';

describe('DataSocketService', () => {
  let service: DataSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
