import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndoncallhelpComponent } from './andoncallhelp.component';

describe('AndoncallhelpComponent', () => {
  let component: AndoncallhelpComponent;
  let fixture: ComponentFixture<AndoncallhelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndoncallhelpComponent]
    });
    fixture = TestBed.createComponent(AndoncallhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
