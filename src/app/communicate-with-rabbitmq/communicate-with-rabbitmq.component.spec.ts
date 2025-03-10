import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateWithRabbitmqComponent } from './communicate-with-rabbitmq.component';

describe('CommunicateWithRabbitmqComponent', () => {
  let component: CommunicateWithRabbitmqComponent;
  let fixture: ComponentFixture<CommunicateWithRabbitmqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicateWithRabbitmqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicateWithRabbitmqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
