import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertqualityComponent } from './alertquality.component';

describe('AlertqualityComponent', () => {
  let component: AlertqualityComponent;
  let fixture: ComponentFixture<AlertqualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertqualityComponent]
    });
    fixture = TestBed.createComponent(AlertqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
