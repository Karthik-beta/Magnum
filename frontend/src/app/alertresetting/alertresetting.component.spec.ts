import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertresettingComponent } from './alertresetting.component';

describe('AlertresettingComponent', () => {
  let component: AlertresettingComponent;
  let fixture: ComponentFixture<AlertresettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertresettingComponent]
    });
    fixture = TestBed.createComponent(AlertresettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
