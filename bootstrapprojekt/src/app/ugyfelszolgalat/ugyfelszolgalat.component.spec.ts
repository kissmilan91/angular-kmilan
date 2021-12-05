import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgyfelszolgalatComponent } from './ugyfelszolgalat.component';

describe('UgyfelszolgalatComponent', () => {
  let component: UgyfelszolgalatComponent;
  let fixture: ComponentFixture<UgyfelszolgalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgyfelszolgalatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgyfelszolgalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
