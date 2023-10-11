import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertelectComponent } from './alertelect.component';

describe('AlertelectComponent', () => {
  let component: AlertelectComponent;
  let fixture: ComponentFixture<AlertelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertelectComponent]
    });
    fixture = TestBed.createComponent(AlertelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
