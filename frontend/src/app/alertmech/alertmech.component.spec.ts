import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmechComponent } from './alertmech.component';

describe('AlertmechComponent', () => {
  let component: AlertmechComponent;
  let fixture: ComponentFixture<AlertmechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertmechComponent]
    });
    fixture = TestBed.createComponent(AlertmechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
