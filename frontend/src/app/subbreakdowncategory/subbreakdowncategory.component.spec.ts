import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbreakdowncategoryComponent } from './subbreakdowncategory.component';

describe('SubbreakdowncategoryComponent', () => {
  let component: SubbreakdowncategoryComponent;
  let fixture: ComponentFixture<SubbreakdowncategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubbreakdowncategoryComponent]
    });
    fixture = TestBed.createComponent(SubbreakdowncategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
