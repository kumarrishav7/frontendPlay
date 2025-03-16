import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateWithDbDirectlyComponent } from './communicate-with-db-directly.component';

describe('CommunicateWithDbDirectlyComponent', () => {
  let component: CommunicateWithDbDirectlyComponent;
  let fixture: ComponentFixture<CommunicateWithDbDirectlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicateWithDbDirectlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicateWithDbDirectlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
