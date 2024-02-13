import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAndoncallhelpComponent } from './add-edit-andoncallhelp.component';

describe('AddEditAndoncallhelpComponent', () => {
  let component: AddEditAndoncallhelpComponent;
  let fixture: ComponentFixture<AddEditAndoncallhelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAndoncallhelpComponent]
    });
    fixture = TestBed.createComponent(AddEditAndoncallhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
