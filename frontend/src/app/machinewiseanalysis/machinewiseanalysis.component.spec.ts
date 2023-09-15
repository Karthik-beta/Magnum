import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinewiseanalysisComponent } from './machinewiseanalysis.component';

describe('MachinewiseanalysisComponent', () => {
  let component: MachinewiseanalysisComponent;
  let fixture: ComponentFixture<MachinewiseanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinewiseanalysisComponent]
    });
    fixture = TestBed.createComponent(MachinewiseanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
