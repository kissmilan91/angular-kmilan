import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebfejlesztesComponent } from './webfejlesztes.component';

describe('WebfejlesztesComponent', () => {
  let component: WebfejlesztesComponent;
  let fixture: ComponentFixture<WebfejlesztesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebfejlesztesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebfejlesztesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
