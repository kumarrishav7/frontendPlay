import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseMessageBrokerBehaviourComponent } from './analyse-message-broker-behaviour.component';

describe('AnalyseMessageBrokerBehaviourComponent', () => {
  let component: AnalyseMessageBrokerBehaviourComponent;
  let fixture: ComponentFixture<AnalyseMessageBrokerBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseMessageBrokerBehaviourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseMessageBrokerBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
