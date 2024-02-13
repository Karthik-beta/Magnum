import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBreakdownComponent } from './add-edit-breakdown.component';

describe('AddEditBreakdownComponent', () => {
  let component: AddEditBreakdownComponent;
  let fixture: ComponentFixture<AddEditBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditBreakdownComponent]
    });
    fixture = TestBed.createComponent(AddEditBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
