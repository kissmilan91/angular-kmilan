import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArakComponent } from './arak.component';

describe('ArakComponent', () => {
  let component: ArakComponent;
  let fixture: ComponentFixture<ArakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
