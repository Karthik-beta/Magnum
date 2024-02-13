import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertengineeringComponent } from './alertengineering.component';

describe('AlertengineeringComponent', () => {
  let component: AlertengineeringComponent;
  let fixture: ComponentFixture<AlertengineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertengineeringComponent]
    });
    fixture = TestBed.createComponent(AlertengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
