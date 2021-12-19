import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForditasComponent } from './forditas.component';

describe('ForditasComponent', () => {
  let component: ForditasComponent;
  let fixture: ComponentFixture<ForditasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForditasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForditasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
